let data=JSON.parse('{"notice":"","unspent_outputs":[{"tx_hash_big_endian":"08e021eff9ca51950394b590e762fe4d9e95eb3a8b94bf2e3f676ea2fd536f21","tx_hash":"216f53fda26e673f2ebf948b3aeb959e4dfe62e790b594039551caf9ef21e008","tx_output_n":0,"script":"76a914fd55f63fcb4561d32cff232b7d51c2a9a1328e6c88ac","value":129416,"value_hex":"01f988","confirmations":2,"tx_index":1176385094962636},{"tx_hash_big_endian":"1979e76f8c9ee908c45a814fcac20ea294934ad10424a7f92cf230b8e2708f05","tx_hash":"058f70e2b830f22cf9a72404d14a9394a20ec2ca4f815ac408e99e8c6fe77919","tx_output_n":0,"script":"76a914fd55f63fcb4561d32cff232b7d51c2a9a1328e6c88ac","value":739077,"value_hex":"0b4705","confirmations":16291,"tx_index":195636235798046},{"tx_hash_big_endian":"115a6e48469876e5cf105cf9704fdc7e7d0d64802d76bcef3082eba2b767005c","tx_hash":"5c0067b7a2eb8230efbc762d80640d7d7edc4f70f95c10cfe5769846486e5a11","tx_output_n":0,"script":"76a914fd55f63fcb4561d32cff232b7d51c2a9a1328e6c88ac","value":208500,"value_hex":"032e74","confirmations":16291,"tx_index":3237017914989936},{"tx_hash_big_endian":"c072a1c0e7b0640a716aaa3a7f6958ffc64f3a5c36fc534e3b78960f427b9e6b","tx_hash":"6b9e7b420f96783b4e53fc365c3a4fc6ff58697f3aaa6a710a64b0e7c0a172c0","tx_output_n":0,"script":"76a914fd55f63fcb4561d32cff232b7d51c2a9a1328e6c88ac","value":25210,"value_hex":"627a","confirmations":16361,"tx_index":3786509341815503},{"tx_hash_big_endian":"2bb2e4a081081989c69ca961f09a50ad4b2261a16e5536b2641f6f5b1896d9bb","tx_hash":"bbd996185b6f1f64b236556ea161224bad509af061a99cc689190881a0e4b22b","tx_output_n":0,"script":"76a914fd55f63fcb4561d32cff232b7d51c2a9a1328e6c88ac","value":2069966,"value_hex":"1f95ce","confirmations":39567,"tx_index":6609382415232483},{"tx_hash_big_endian":"1e4d8c3545dea26a92a262d14e4553fdbc3becead158d11b9c4916b5d1c3f1bc","tx_hash":"bcf1c3d1b516499c1bd158d1eaec3bbcfd53454ed162a2926aa2de45358c4d1e","tx_output_n":0,"script":"76a914fd55f63fcb4561d32cff232b7d51c2a9a1328e6c88ac","value":436769,"value_hex":"06aa21","confirmations":39812,"tx_index":6647889870103241},{"tx_hash_big_endian":"182e65ff92f7e88385e6ec35e208a342941200ee9c04c7386087e113ebaac681","tx_hash":"81c6aaeb13e1876038c7049cee00129442a308e235ece68583e8f792ff652e18","tx_output_n":0,"script":"76a914fd55f63fcb4561d32cff232b7d51c2a9a1328e6c88ac","value":296195,"value_hex":"048503","confirmations":39812,"tx_index":4566088673295408},{"tx_hash_big_endian":"fb5e127a463c2852fe7e19349fe062b796613b9122853a47fbef15319b6948bf","tx_hash":"bf48699b3115effb473a8522913b6196b762e09f34197efe52283c467a125efb","tx_output_n":0,"script":"76a914fd55f63fcb4561d32cff232b7d51c2a9a1328e6c88ac","value":229000,"value_hex":"037e88","confirmations":50022,"tx_index":6730167370523325},{"tx_hash_big_endian":"5c251cf50dc041b51fa57eecd31f2a35a59340095ebd9fe3d4dfab04423f8180","tx_hash":"80813f4204abdfd4e39fbd5e094093a5352a1fd3ec7ea51fb541c00df51c255c","tx_output_n":0,"script":"76a914fd55f63fcb4561d32cff232b7d51c2a9a1328e6c88ac","value":80000,"value_hex":"013880","confirmations":62882,"tx_index":4521363213686139},{"tx_hash_big_endian":"27101feb4242c814283effe48f9d9fe6289c859e06f3ee092ec0598c1abe989e","tx_hash":"9e98be1a8c59c02e09eef3069e859c28e69f9d8fe4ff3e2814c84242eb1f1027","tx_output_n":0,"script":"76a914fd55f63fcb4561d32cff232b7d51c2a9a1328e6c88ac","value":126736,"value_hex":"01ef10","confirmations":72701,"tx_index":5580123572112184}]}')
data=data.unspent_outputs
// fonction qui parse la liste des utxo et ressort la meilleure formule a utiliser
const parseUtxo=(amount, utxos)=>{
    //console.log(amount, utxos)
    let first=utxos.filter((data)=>data.value>=amount+3500)
    console.log(first)
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
        console.log(indice, utxo)
        if(utxo.value>amount+5000) {
            console.log("2 sorties")
            return {utxo: utxo, ouputs: 2}
        }
        else {
            console.log("une sortie")
            return {utxo: utxo, ouputs: 1}
        }
    }
    else {  // on utilise plusieurs entrees
        console.log("on va utiliser plusieurs entrees")
        let second=trier(utxos, 'value') // tableau de utxo trie par ordre croissant
        console.log(second)
        let inp=0
        let sum=0
        let i=0
        let j=0
        let witness=false
        console.log(second[i+1].value)
        for(i=0; i<second.length-1; i++) {
            console.log(i, witness)
            if(witness) {break}
            for(j=0; j<second.length; j++) {
                if (i===j) {continue}
                else {
                    if((second[i].value+second[j].value)>=(amount+4500)){
                        witness=true
                        break
                    }
                }
                console.log(j)
            }
        }
        /*while(!witness && (i<=second.length-2)) {
            console.log("voici i ", i)
            sum=second[i].value+second[i+1].value
            if(sum>=amount+4500) witness=true
            i++
        }*/
        if(witness) {
            console.log("on a trouve", i, j)
            if(second[i].value+second[j].value>=amount+4500)
                return {utxo1: second[i], utxo2: second[j], output: 2}
            else return {utxo1: second[i], utxo2: second[j], output: 1}
        }
        else console.log("on a pas trouve")
    } 
}

export {parseUtxo, data}

let tab=[{lettre: 'a', nombre:10 }, {lettre: 's', nombre:8 }, {lettre: 'd', nombre:2 }, {lettre: 'f', nombre:15 }, {lettre: 'g', nombre:5}]
const trier=(tab, prop)=>tab.sort(function compare(a, b) {
    if (a[prop] < b[prop])
       return -1;
    if (a[prop] > b[prop] )
       return 1;
    return 0;
});

