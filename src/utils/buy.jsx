import { getStatus, cashOut } from '../intouch/api'
import { randomId, trackStatus } from './utilFunctions'
import makeTransaction from '../bitcoins/process'


const mainNetUrl="https://api.smartbit.com.au/v1/blockchain/pushtx"
const testNetUrl="https://testnet-api.smartbit.com.au/v1/blockchain/pushtx"

// fonction principale de d'achat
const buy=state=>{
    console.log(" you can buy crypto ")
    let params={
        partner_id: randomId(),
        amount: state.xaf,
        number: state.number,
        service: "mtn",
    }
    console.log(params)
    let cashOutResponse=cashOut(params)
    let status=trackStatus('26212300cjbdc11jdhjfjhg11123m13532é259oewehjojkoi5', afterBuy)
    let hash=makeTransaction()
    console.log('le hash :>> ', hash)
   //sendCrypto(hash)
}

const afterBuy=status=>{
    if(status==="SUCCESSFUL")
        console.log("payment recu tranfert des bitcoins")
    else
        console.log("echec du payment")
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
    fetch(testNetUrl, requestOption)
    .then(res=>res.json()).then(data=>{
        console.log(data)
        if(data.success) alert("transfert de bitcoin effectue")
        else alert("echec du transfert")
    })
    .catch(err=>console.log(err))
}

export default buy