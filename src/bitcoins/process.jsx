//import Btc from 'bitcoinjs-lib'
const Btc=require('bitcoinjs-lib')
//console.log(Btc)

const makeTransaction=(recipient, amount)=>{

    // choix du reseau
    const TestNet=Btc.networks.testnet
    
    let privateKey="9392BBKwZWvarjNUfx9248qinuo3bf9KY38YACxRUiHauBTWGv8"
    let wallet=Btc.ECPair.fromWIF(privateKey, TestNet)
    //console.log('\n\n',wallet.privateKey)
    
    // building the transaction
    let tx = new Btc.TransactionBuilder(TestNet)
    let satoshiRate=100000000
    let amountWeHave=0.0018*satoshiRate
    let amountWeSend=0.0009*satoshiRate
    let fee=12500
    let amountWeKeep=amountWeHave-amountWeSend-fee
    
    // id de la transaction
    tx.addInput("b7d53ca4474388053cf0b93f0f1f1d53cba47379d46d958822db0b151ee6948c", 0)
    //tx.addInput("45ef4650fd6076a449d7257b00313c0e5c1000fb49eaacd7d2449b16d80517fe", 0)
    //console.log("\n\n la transaction 1",tx)
    
    // adresse de destination
    tx.addOutput("2N427AhydWeohzvkRGirYj2aCmhB3YQhVU8", amountWeSend)
    //tx.addOutput("n1kwp1iE588KJsaFxgtRMPUURPUgCywGHR", amountWeKeep)
    //console.log("\n\n la transaction 2",tx)
    
    // signature de la transaction (avec les information sur le wallet source)
    tx.sign(0, wallet)
    //console.log("\n\n la transaction 3",tx)
    
    // generation du hachage de la transaction
    let tx_hex = tx.build().toHex()
    //console.log("\n\n tx: ",tx_hex)
    return tx_hex
}    

export default makeTransaction
