import { trier } from '../utils/utilFunctions'


const utxoUrl='https://blockchain.info/unspent?active='

let uspt=JSON.parse('{"notice":"","unspent_outputs":[{"tx_hash_big_endian":"08e021eff9ca51950394b590e762fe4d9e95eb3a8b94bf2e3f676ea2fd536f21","tx_hash":"216f53fda26e673f2ebf948b3aeb959e4dfe62e790b594039551caf9ef21e008","tx_output_n":0,"script":"76a914fd55f63fcb4561d32cff232b7d51c2a9a1328e6c88ac","value":129416,"value_hex":"01f988","confirmations":2,"tx_index":1176385094962636},{"tx_hash_big_endian":"1979e76f8c9ee908c45a814fcac20ea294934ad10424a7f92cf230b8e2708f05","tx_hash":"058f70e2b830f22cf9a72404d14a9394a20ec2ca4f815ac408e99e8c6fe77919","tx_output_n":0,"script":"76a914fd55f63fcb4561d32cff232b7d51c2a9a1328e6c88ac","value":739077,"value_hex":"0b4705","confirmations":16291,"tx_index":195636235798046},{"tx_hash_big_endian":"115a6e48469876e5cf105cf9704fdc7e7d0d64802d76bcef3082eba2b767005c","tx_hash":"5c0067b7a2eb8230efbc762d80640d7d7edc4f70f95c10cfe5769846486e5a11","tx_output_n":0,"script":"76a914fd55f63fcb4561d32cff232b7d51c2a9a1328e6c88ac","value":208500,"value_hex":"032e74","confirmations":16291,"tx_index":3237017914989936},{"tx_hash_big_endian":"c072a1c0e7b0640a716aaa3a7f6958ffc64f3a5c36fc534e3b78960f427b9e6b","tx_hash":"6b9e7b420f96783b4e53fc365c3a4fc6ff58697f3aaa6a710a64b0e7c0a172c0","tx_output_n":0,"script":"76a914fd55f63fcb4561d32cff232b7d51c2a9a1328e6c88ac","value":25210,"value_hex":"627a","confirmations":16361,"tx_index":3786509341815503},{"tx_hash_big_endian":"2bb2e4a081081989c69ca961f09a50ad4b2261a16e5536b2641f6f5b1896d9bb","tx_hash":"bbd996185b6f1f64b236556ea161224bad509af061a99cc689190881a0e4b22b","tx_output_n":0,"script":"76a914fd55f63fcb4561d32cff232b7d51c2a9a1328e6c88ac","value":2069966,"value_hex":"1f95ce","confirmations":39567,"tx_index":6609382415232483},{"tx_hash_big_endian":"1e4d8c3545dea26a92a262d14e4553fdbc3becead158d11b9c4916b5d1c3f1bc","tx_hash":"bcf1c3d1b516499c1bd158d1eaec3bbcfd53454ed162a2926aa2de45358c4d1e","tx_output_n":0,"script":"76a914fd55f63fcb4561d32cff232b7d51c2a9a1328e6c88ac","value":436769,"value_hex":"06aa21","confirmations":39812,"tx_index":6647889870103241},{"tx_hash_big_endian":"182e65ff92f7e88385e6ec35e208a342941200ee9c04c7386087e113ebaac681","tx_hash":"81c6aaeb13e1876038c7049cee00129442a308e235ece68583e8f792ff652e18","tx_output_n":0,"script":"76a914fd55f63fcb4561d32cff232b7d51c2a9a1328e6c88ac","value":296195,"value_hex":"048503","confirmations":39812,"tx_index":4566088673295408},{"tx_hash_big_endian":"fb5e127a463c2852fe7e19349fe062b796613b9122853a47fbef15319b6948bf","tx_hash":"bf48699b3115effb473a8522913b6196b762e09f34197efe52283c467a125efb","tx_output_n":0,"script":"76a914fd55f63fcb4561d32cff232b7d51c2a9a1328e6c88ac","value":229000,"value_hex":"037e88","confirmations":50022,"tx_index":6730167370523325},{"tx_hash_big_endian":"5c251cf50dc041b51fa57eecd31f2a35a59340095ebd9fe3d4dfab04423f8180","tx_hash":"80813f4204abdfd4e39fbd5e094093a5352a1fd3ec7ea51fb541c00df51c255c","tx_output_n":0,"script":"76a914fd55f63fcb4561d32cff232b7d51c2a9a1328e6c88ac","value":80000,"value_hex":"013880","confirmations":62882,"tx_index":4521363213686139},{"tx_hash_big_endian":"27101feb4242c814283effe48f9d9fe6289c859e06f3ee092ec0598c1abe989e","tx_hash":"9e98be1a8c59c02e09eef3069e859c28e69f9d8fe4ff3e2814c84242eb1f1027","tx_output_n":0,"script":"76a914fd55f63fcb4561d32cff232b7d51c2a9a1328e6c88ac","value":126736,"value_hex":"01ef10","confirmations":72701,"tx_index":5580123572112184}]}')
uspt=uspt.unspent_outputs

// fonction qui recupere l'id de la ou des transactions a utiliser
const getUtxoId=async (amount)=>{   //recupere et formate les utxo
    let utxos= await fetch('https://blockchain.info/unspent?active=1Q6WwGjuiPwXZV8uwGbvXERbpSNdJEXZ47', {method: 'GET'})
    .then(response=>response.json()).then(data=>data.unspent_outputs)
    .catch(err=>[])
    //console.log('les utxos :>> ', utxos);
    return utxos
    /*if(utxos.length) {
        return {status: 'success', n:utxos[0].tx_output_n, id:utxos[0].tx_hash_big_endian, value:utxos[0].value}
    }
    else return {status: 'fail', cause: 'manque de fonds'}*/
}


// fonction qui parse la liste des utxo et ressort la meilleure formule a utiliser
const parseUtxo=(amount, utxos)=>{
    if(!utxos.length) return {status: 'fail', cause: 'manque de fonds'}
    let todo=true
    let first=utxos.filter((data)=>data.value>=amount+3500)
    //console.log(first)
    if(first.length) { // on utilise une entree
        let min=first[0].value
        let indice
        first.map((data, i)=>{ // on recherche la transaction avec la plus grande valeur
            if(data.value<=min) {
                min=data.value
                indice=i
            }
        })
        let utxo={n:first[indice].tx_output_n, id:first[indice].tx_hash_big_endian, value:first[indice].value}
        //console.log(indice, utxo)
        if(utxo.value>amount+6000) {
            console.log("2 sorties")
            todo=false
            return {status: 'success', input: 1, utxo: utxo, ouputs: 2}
        }
        else {
            console.log("une sortie")
            todo=false
            return {status: 'success', input: 1, utxo: utxo, ouputs: 1}
        }
    }
    if(todo) {  // on utilise plusieurs entrees
        console.log("on cherche 2 entrees")
        let second=trier(utxos, 'value') // tableau de utxo trie par ordre croissant
        let ind={i: 0, j:0}
        let i=0, j=0
        let witness=false
        for(i=0; i<second.length-1; i++) {
            if(witness) {break}
            for(j=0; j<second.length; j++) {
                if (i===j) {continue}
                else {
                    if((second[i].value+second[j].value)>=(amount+4500)){
                        ind={i: i, j: j}
                        witness=true
                        break
                    }
                }
            }
        }
        if(witness) {
            console.log("on a trouve", ind)
            i=ind.i
            j=ind.j
            if(second[i].value+second[j].value>=amount+7000){
                todo=false
                return {
                    status: 'success',
                    input: 2,
                    utxo1: { id:second[i].tx_hash_big_endian, n:second[i].tx_output_n, value:second[i].value },
                    utxo2: { id:second[j].tx_hash_big_endian, n:second[j].tx_output_n, value:second[j].value },
                    ouputs: 2
                }
            }
            else {
                todo=false
                return {
                    status: 'success',
                    input: 2,
                    utxo1: { id:second[i].tx_hash_big_endian, n:second[i].tx_output_n, value:second[i].value },
                    utxo2: { id:second[j].tx_hash_big_endian, n:second[j].tx_output_n, value:second[j].value },
                    ouputs: 1
                }
            }
        }
        else console.log("on a pas trouve ", witness)
    }
    if(todo) {
        console.log("on a passe a trois entrees")
        if(amount>=500000) {
            let third=trier(utxos, 'value') // tableau de utxo trie par ordre croissant
            let witness=false
            let ind={i: 0, j:0, k: 0}
            let i=0, j=0, k=0
            for(i=0; i<third.length-2; i++) {
                if(witness) {break}
                for(j=0; j<third.length-1; j++) {
                    if(witness){break}
                    if (i===j || i===k || j===k) {continue}
                    else {
                        for(k=0; k<third.length; k++){
                            if(witness){break}
                            if (i===k || j===k) {continue}
                            if((third[i].value+third[j].value+third[k].value)>=(amount+6000)){
                                witness=true
                                ind={i: i, j: j, k: k}
                                console.log("trouve ", i, j, k)
                                break
                            }
                        }
                    }
                }
            }
            if(witness) {
                console.log("on a trouve", ind)
                i=ind.i
                j=ind.j
                k=ind.k
                if(third[i].value+third[j].value+third[j].value>=amount+8500){
                    todo=false
                    return {
                        status: 'success',
                        input: 3,
                        utxo1: { id:third[i].tx_hash_big_endian, n:third[i].tx_output_n, value:third[i].value },
                        utxo2: { id:third[j].tx_hash_big_endian, n:third[j].tx_output_n, value:third[j].value },
                        utxo3: { id:third[k].tx_hash_big_endian, n:third[k].tx_output_n, value:third[k].value },
                        ouputs: 2
                    }
                }
                else {
                    todo=false
                    return {
                        status: 'success',
                        input: 3,
                        utxo1: { id:third[i].tx_hash_big_endian, n:third[i].tx_output_n, value:third[i].value },
                        utxo2: { id:third[j].tx_hash_big_endian, n:third[j].tx_output_n, value:third[j].value },
                        utxo3: { id:third[k].tx_hash_big_endian, n:third[k].tx_output_n, value:third[k].value },
                        ouputs: 1
                    }
                }
            }
            else console.log("on a pas trouve ", witness)
        }
        else {
            console.log("le montant est trop bas on annule")
        }
    }
    if(todo) return {status: 'fail', cause: 'need to many entries'}
}

export { getUtxoId, parseUtxo }