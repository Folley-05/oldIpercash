import { getStatus, cashOut } from '../intouch/api'
import { randomId, trackStatus, checkServiceId } from './utilFunctions'
import makeTransaction from '../bitcoins/process'


const mainNetUrl="https://api.smartbit.com.au/v1/blockchain/pushtx"
const testNetUrl="https://testnet-api.smartbit.com.au/v1/blockchain/pushtx"

// fonction principale de d'achat
const buy=async (state, callback1, callback2)=>{
    console.log(" you can buy crypto ")
    let crypto=state.amount*100000000
    let wallet=state.wallet
    let params={
        partner_id: randomId(),
        amount: state.xaf,
        number: state.number,
        service: checkServiceId(state.number),
    }
    console.log(params)
    let hash=await makeTransaction(wallet, crypto)
    console.log('le hash :>> ', hash);
}

const afterBuy=status=>{
    if(status==="SUCCESSFUL") {
        console.log("payment recu tranfert des bitcoins")
        let hash=makeTransaction()
        console.log('le hash :>> ', hash)
        sendCrypto(hash)
    }
    else {
        console.log("echec du payment")
        alert("echec du payment")
    }
}


const sendCrypto=hash=>{
    console.log("send bitcointest")
    // let hex='0200000001352ffac305c57d14e3e1570ddba810b47609f5c04c4daf0e99c763c459104f74000000008a47304402202ac5e8498c7bac477952a7fb63fad616841329267bfc658cc10bdcb1f4c7304b02202f401e97f1f73be256fd7f17f2de785dcaeecd205f1ab5c669140e23923622210141046d08fcaf97148dbd6ab9ab3a00e83afd95ad471d8e57e64ae7496e60cc173aa60b8bae5a3c9bd75e6ff666449b839a3beea591aa0394d3401184d7b978b6e768ffffffff01d07c2b00000000001976a9145cfde21a42acd074450a247d28aecafad58c95c688ac00000000'
    // let form=new FormData()
    // let myHeaders=new Headers()
    // form.append('hex', hex)
    let data={ hex: hash }
    let requestOption={
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json'
        }
    }
    console.log("la transaction va etre envoyee")
    fetch(testNetUrl, requestOption)
    .then(res=>res.json()).then(data=>{
        console.log(data)
        if(data.success) alert("transfert de bitcoin effectue")
        else alert("echec du transfert")
    })
    .catch(err=>console.log(err))
}

export default buy