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
    let amountWeHave=0.001*satoshiRate
    let amountWeSend=0.0009*satoshiRate
    let fee=12500
    let amountWeKeep=amountWeHave-amountWeSend-fee
    
    // id de la transaction
    tx.addInput("a3bf7d1604039c2c9decbc94c70f154b76049634e38b9ab3a278f8014c0b2e58", 1)
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
