import { cashOut, cashIn } from '../intouch/api'
import { randomId, trackStatus, checkServiceId, trackStatus2 } from './utilFunctions'
import {checkBalance, checkAddress } from '../bitcoins/process'

import crypt from './crypt'


const mainNetUrl='https://api.blockcypher.com/v1/btc/main/txs/push'
const testNetUrl='https://api.blockcypher.com/v1/btc/test3/txs/push'

// fonction principale de d'achat
const buy=async (state, callback, cancel)=>{
    console.log(" you can buy crypto ", state)
    let i=0
    let attemps=0
    // preparation des parametres
    let params={
        partner_id: randomId(),
        amount: state.xaf,
        number: state.number,
        service: checkServiceId(state.number),
    }
    //console.log(params)
    let crypto=state.amount*100000000
    let wallet=state.wallet
    let result, partner_id

    // sendCrypto("02000000011ad740cee301732b0c5de22f7357683d12971a0840e5e9fff620fcf3515ce160010000006a473044022039ce9469d60d06ca0b39265e58cbbabbac70e029a474d15724beab873189583b02200c96fa922c508debdfbfbb8df78aca8cff4cc109aa4bc167241467f3c012b7710121020ad877f83e6160bca0007e8f6e9aaeef6c8cf1edb239780b529e120b0204bb90ffffffff02744f0000000000001976a9141fc1487680f717cc5be6341a5739acfa48da169688ac843f0000000000001976a9148c34143e9cb703963488a8bf1458cf36fd5af21388ac00000000")
    // return

    try {
        // verification de la validite de l'adresse
            console.log("verification de l'adresse")
        do {
            console.log("tentative ", attemps)
            result=await checkAddress(wallet)
            if(result.status==='fail') {
                attemps++
            }
            else {
                console.log(" on continue  ")
                attemps=3
            }
        } while (attemps<3)
        if(result.status==='fail') {
            console.log(result)
            cancel(result, i)
            return result
        }
        // fin de la verification de l'adresse
        attemps=0
        // verification du solde
            console.log("verification du solde")
        do {
            console.log("tentative ", attemps)
            result=await checkBalance(crypto)
            if(result.status==='fail') {
                attemps++
            }
            else {
                console.log("on continue")
                attemps=3
            }
            
        } while (attemps<3)
        if(result.status==='fail') {
            //console.log(result)
            cancel(result, i)
            return result
        }
        attemps=0
        // fin de la premiere etape 
        i++
        callback(i)

        // reception du payment
        /*do {
            console.log("tentative ", attemps)
            partner_id=await cashOut(params)
            partner_id ? attemps=3 : attemps++
        } while (attemps<3);
        if(partner_id) {
            trackStatus(partner_id, ()=>afterBuy(i, callback, wallet, crypto, cancel), cancel)
        }
        else {
            cancel({status: 'fail', cause: "payment demand has fail"}, i)
            return 10
        }*/
        
        afterBuy(i, callback, wallet, crypto, cancel)
        return

        
    } catch (error) {
        cancel({status: 'fail', cause: "unknow error"}, i)
        console.log("l'erreur", error)
    }
}

const afterBuy=async (i, callback, wallet, crypto, cancel)=>{
    
    let result
    // fin de la deuxieme etape
    i++
    callback(i)
    
    console.log("on entre dans after buy")

    // construction de la transaction
    result=await getHash(wallet, crypto)
    if(result.status==='fail') {
        console.log("echec de la construction")
        cancel(result, i)
        return result
    }
    console.log("construction reussie ",result)
    i++
    callback(i)

    //throw("ma propre erreur cool")

    // envoie de la transaction
    console.log("faut reactiver send crypto")
    result=await sendCrypto(result.hash)
    console.log("final result", result)
    if(result.status==='fail') {
        console.log("echec du trensfert")
        cancel(result, i)
    }
    i++
    callback(i)
}


const sendCrypto=async (hash)=>{
    console.log("send bitcoin")
    var decodetx={
        tx: hash
    }
    return await fetch(mainNetUrl, {method: "POST", body: JSON.stringify(decodetx) })
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
        if(data.tx) return {status: 'success', txid: data.tx.hash}
        else return {status: 'fail', cause: "can't send fund"}
    })
}

const backFunds=(state, callback)=>{
    // preparation des parametres
    let params={
        partner_id: randomId(),
        amount: state.xaf,
        number: state.number,
        service: checkServiceId(state.number),
    }
    cashIn(params)
    .then(status=>{
        console.log("le status du then", status)
        if(status) trackStatus(status, callback)
        else {
            console.log("echec de l'operation")
            callback()
        }
    })

}

const getHash=async (wallet, crypto)=>{
    let params={recipient: wallet, amount: crypto}
    params=JSON.stringify(params)
    let send=crypt(params)
    console.log("ce que j'envoie ", send)
    return await fetch("http://localhost:4001/api/hash", {
    "method": "POST",
    "headers": {
        "Content-Type": "application/json"
    },
    "body": JSON.stringify({send})
    })
    .then(response => response.json())
    .then(data=>data.response)
    .catch(err => ({status: 'fail', cause: "can't get hash"}));
}

export default buy