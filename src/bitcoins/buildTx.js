
const Btc=require('bitcoinjs-lib')


// la fonction qui construit la transaction
const buildTx=(recipient, amount, params)=>{
    // si le status n'est pas success on annule
    if(params.status!=='success') return params
    // choix du reseau
    let Net, privateKey, wallet
    try {
        Net=Btc.networks.bitcoin
        // privateKey="5KdpAFiuQq8F67EAFQVwEkNyBnMmooNWx3NVgLMjX6kd43igsRC"
        privateKey="L435kT27BffEq2MZtEg4t3hx6AfYkjY8MGYHHvhbvtXakWwGHJM4"
        wallet=Btc.ECPair.fromWIF(privateKey, Net)
        //console.log('\n\n',wallet.privateKey)
        
    } catch (error) {
        return {status: 'fail', cause: "fail to initiate transaction"}
    }

    // building the transaction
    let tx = new Btc.TransactionBuilder(Net)
    
    // differenciation des cas

    // 1 entree
    if(params.input===1) {
        let amountWeHave=params.utxo.value
        let amountWeKeep=0
        let fee=4500
        if(params.ouputs===2) amountWeKeep=amountWeHave-amount-fee
        
        console.log("le montant qu'on garde ", amountWeKeep)
        
        // id de la transaction
        try {
            tx.addInput(params.utxo.id, params.utxo.n)
            // console.log(`ouputs `, params.ouputs)
        } catch (error) {
            return {status: 'fail', cause: "fail add input"}
        }
        
        // adresse de destination
        try {
            tx.addOutput(recipient, Math.floor(amount))
            if(amountWeKeep) tx.addOutput("1DnKzNhp5JQyQRNPHP4coekGcA7KpnPzji", Math.floor(amountWeKeep))
            // console.log("\n\n la transaction 2",tx)
        } catch (error) {
            console.log(error)
            return {status: 'fail', cause: "fail add output"}
        }
        
        // signature de la transaction (avec les information sur le wallet source)
        try {
            tx.sign(0, wallet)
            // console.log("\n\n la transaction 3",tx)
            console.log(`ouputs `, params.ouputs)
            console.log(`amountWeKeep `, amountWeKeep)
        } catch (error) {
            return {status: 'fail', cause: "fail to sign"}
        }
        
        // generation du hachage de la transaction
        let tx_hex=null
        try {
            tx_hex = tx.build().toHex()
            //console.log("\n\n tx: ",tx_hex)
        } catch (error) {
            return {status: 'fail', cause: "fail to build"}
        }
        return {status: 'success', hash: tx_hex}
    }

    // 2 entrees
    else if(params.input===2) {
        let amountWeHave=params.utxo1.value+params.utxo2.value
        let amountWeKeep=0
        let fee=7500
        if(params.ouputs===2) amountWeKeep=amountWeHave-amount-fee
        
        
        // id de la transaction
        try {
            tx.addInput(params.utxo1.id, params.utxo1.n)
            tx.addInput(params.utxo2.id, params.utxo2.n)
            // console.log(`ouputs `, params.ouputs)
        } catch (error) {
            return {status: 'fail', cause: "fail add input"}
        }
        
        // adresse de destination
        try {
            tx.addOutput(recipient, Math.floor(amount))
            if(amountWeKeep) tx.addOutput("1DnKzNhp5JQyQRNPHP4coekGcA7KpnPzji", Math.floor(amountWeKeep))
            // console.log("\n\n la transaction 2",tx)
        } catch (error) {
            return {status: 'fail', cause: "fail add output"}
        }
        
        // signature de la transaction (avec les information sur le wallet source)
        try {
            tx.sign(0, wallet)
            tx.sign(1, wallet)
            // console.log("\n\n la transaction 3",tx)
            console.log(`ouputs `, params.ouputs)
            console.log(`amountWeKeep `, amountWeKeep)
        } catch (error) {
            return {status: 'fail', cause: "fail to sign"}
        }
        
        // generation du hachage de la transaction
        let tx_hex=null
        try {
            tx_hex = tx.build().toHex()
            //console.log("\n\n tx: ",tx_hex)
        } catch (error) {
            return {status: 'fail', cause: "fail to build"}
        }
        return {status: 'success', hash: tx_hex}

    }

    // 3 entrees
    else if(params.input===3) {
        let amountWeHave=params.utxo1.value+params.utxo2.value+params.utxo3.value
        let amountWeKeep=0
        let fee=10000
        if(params.ouputs===2) amountWeKeep=amountWeHave-amount-fee
        
        
        // id de la transaction
        try {
            tx.addInput(params.utxo1.id, params.utxo1.n)
            tx.addInput(params.utxo2.id, params.utxo2.n)
            tx.addInput(params.utxo3.id, params.utxo3.n)
            // console.log(`ouputs `, params.ouputs)
        } catch (error) {
            return {status: 'fail', cause: "fail add input"}
        }
        
        // adresse de destination
        try {
            tx.addOutput(recipient, Math.floor(amount))
            if(amountWeKeep) tx.addOutput("1DnKzNhp5JQyQRNPHP4coekGcA7KpnPzji", Math.floor(amountWeKeep))
            // console.log("\n\n la transaction 2",tx)
        } catch (error) {
            return {status: 'fail', cause: "fail add output"}
        }
        
        // signature de la transaction (avec les information sur le wallet source)
        try {
            tx.sign(0, wallet)
            tx.sign(1, wallet)
            tx.sign(2, wallet)
            // console.log("\n\n la transaction 3",tx)
            console.log(`ouputs `, params.ouputs)
            console.log(`amountWeKeep `, amountWeKeep)
        } catch (error) {
            return {status: 'fail', cause: "fail to sign"}
        }
        
        // generation du hachage de la transaction
        let tx_hex=null
        try {
            tx_hex = tx.build().toHex()
            //console.log("\n\n tx: ",tx_hex)
        } catch (error) {
            return {status: 'fail', cause: "fail to build"}
        }
        return {status: 'success', hash: tx_hex}

    }
    else return {status: 'fail', cause: 'unknow in buildTx'}

    
}

export default buildTx
