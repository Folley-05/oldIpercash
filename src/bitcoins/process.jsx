//import Btc from 'bitcoinjs-lib'
const Btc=require('bitcoinjs-lib')
//console.log(Btc)

const utxoUrl='https://blockchain.info/unspent?active='

//const makeTransaction=(recipient, amount)=>getUtxoId(1000).then(tx=>buildTx(recipient, amount, tx))
const makeTransaction=async (recipient, amount)=>{
    console.log('parametre :>> ', recipient, amount)
    let tx=await getUtxoId(amount)
    if(tx.status==='success') {
        let hex
        try {
            hex=buildTx(recipient, amount, tx)
            return {status: 'success', hash:hex}
        } catch (error) {
            return {status: 'fail', cause: 'transaction build failed', error:error}
        }
    }
    else return tx

}

// fonction qui recupere l'id de la ou des transactions a utiliser
const getUtxoId=async (amount)=>{   //recupere et formate les utxo
    let utxos= await fetch('https://blockchain.info/unspent?active=1EuUTQes6r5F9iGHvajUPifkQYpoch1yHZ', {method: 'GET'})
    .then(response=>response.json()).then(data=>data.unspent_outputs)
    .catch(err=>console.log('err :>> ', err))
    console.log('les utxos :>> ', utxos);
    if(utxos.length) {
        return {status: 'success', n:utxos[0].tx_output_n, id:utxos[0].tx_hash_big_endian, value:utxos[0].value}
    }
    else return {status: 'fail', cause: 'manque de fonds'}
}

// fonction qui parse la liste des utxo et ressort la meilleure formule a utiliser
const parseUtxo=(amount, utxos)=>{
    if(utxos.length) {
        let indice
        let min=0
        let tab
        tab=utxos.map((data, i)=>{
            if(data.value>=(amount+4500)) {
                if(data.value>min){
                    indice=i
                }
                return data
            }
        })
    }
    else return {status: 'fail', cause: "don't find utxo"}
}


const buildTx=(recipient, amount, utxo)=>{
    // choix du reseau
    const Net=Btc.networks.bitcoin
    let privateKey="5KdpAFiuQq8F67EAFQVwEkNyBnMmooNWx3NVgLMjX6kd43igsRC"
    let wallet=Btc.ECPair.fromWIF(privateKey, Net)
    //console.log('\n\n',wallet.privateKey)

    // building the transaction
    let tx = new Btc.TransactionBuilder(Net)
    //let satoshiRate=100000000
    let amountWeHave=utxo.value
    let fee=4500
    let amountWeKeep=amountWeHave-amount-fee
    
    // id de la transaction
    tx.addInput(utxo.id, utxo.n)
    console.log("\n\n la transaction 1",tx)
    
    // adresse de destination
    tx.addOutput(recipient, amount)
    //tx.addOutput("n1kwp1iE588KJsaFxgtRMPUURPUgCywGHR", amountWeKeep)
    console.log("\n\n la transaction 2",tx)
    
    // signature de la transaction (avec les information sur le wallet source)
    tx.sign(0, wallet)
    console.log("\n\n la transaction 3",tx)
    
    // generation du hachage de la transaction
    let tx_hex = tx.build().toHex()
    //console.log("\n\n tx: ",tx_hex)
    return tx_hex
}



export default makeTransaction
