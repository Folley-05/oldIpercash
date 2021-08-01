import { getUtxoId, parseUtxo } from './getUtxo'
import buildTx from './buildTx'
import { trier } from '../utils/utilFunctions'



//const makeTransaction=(recipient, amount)=>getUtxoId(1000).then(tx=>buildTx(recipient, amount, tx))
const makeTransaction=async (recipient, amount)=>{
    // console.log('parametre :>> ', recipient, amount)
    // let balance=await checkBalance(amount)
    // console.log('balance :>> ', balance);
    // if(balance.status==='fail') return balance
    let tx=await getUtxoId(amount)
    let params=parseUtxo(amount, tx)
    return  buildTx(recipient, amount, params)

}

// fonction qui verifie la presence des fonds
let address='1DnKzNhp5JQyQRNPHP4coekGcA7KpnPzji'
const checkBalance=async (amount)=>fetch('https://api.smartbit.com.au/v1/blockchain/address/'+address)
    .then(response=>response.json())
    .then(data=>{
        if(data.success) {
            console.log(data)
            console.log(data.address.total.balance_int)
            if(data.address.total.balance_int>amount+4000) { // en production c'est 7500
                return {status: "success"}
            }
            else return {status: 'fail', cause: 'not enough funds'}
        }
        else return {status: 'fail', cause: 'bad address'}
    })
    .catch(err=>({status: 'fail', cause: 'can not get balance'}))

const checkAddress=async(address)=>fetch('https://api.smartbit.com.au/v1/blockchain/address/'+address, {method: 'GET'})
    .then(response=>response.json())
    .then(data=>({status: 'success', address: data.success}))
    .catch(err=>({status: 'fail', cause: "can not get status of address"}))

export {checkBalance, checkAddress, makeTransaction}
