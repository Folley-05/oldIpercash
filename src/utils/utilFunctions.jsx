import { getStatus } from '../intouch/api'

const roundDecimal=(nombre)=>{
    var precision = 8;
    var tmp = Math.pow(10, precision);
    return Math.round( nombre*tmp )/tmp;
}

const trier=(tab, prop)=>tab.sort(function compare(a, b) {
    if (a[prop] < b[prop])
       return -1;
    if (a[prop] > b[prop] )
       return 1;
    return 0;
});

const checkServiceId=num=>{
    console.log("le numero ",num)
    if(num[1]==='7') return 'mtn'
    else if(num[1]==='8') return 'mtn'
    else if(num[1]==='9') return 'orange'
    else if(num[1]==='5') {
        console.log("on entre dans les details")
        if(num[2]<=4) return 'mtn'
        else return 'orange'
    }
}

const randomId=()=>{
    let id1=Math.floor((1+Math.random())*0x100000000000000).toString(20).substring(1)
    let id2=Math.floor((1+Math.random())*0x100000000000000).toString(20).substring(1)
    return id1+id2+Date.now()
}
const randomChain=()=>{
    let id1=Math.floor((1+Math.random())*0x100000000000000).toString(20).substring(1)
    let id2=Math.floor((1+Math.random())*0x100000000000000).toString(20).substring(1)
    return id1+id2
}

const trackStatus=async (id, callBack, cancel)=>{
    console.log("trackstatus")
    let valid=true
    let status="PENDING"
    let i=1
    //getStatus(id)
    let interval=setInterval(async() => {
        let newStatus=await getStatus(id)
        console.log("je suis i", i)
        if(valid) {
            console.log("on entre sans tocker")
            if(newStatus!==status) {
                valid=false
                console.log("l'operation est terminee ", newStatus)
                clearInterval(interval)
                if(newStatus==='SUCCESSFUL') {
                    callBack()
                    return
                }
                else cancel({status: 'fail', cause: 'payment process fail'}, 1)
            }
            i++
        } else {
            clearInterval(interval)
            console.log("on a encore efface l'intervalle")
        }
        //console.log("le status  de trackstatus: ", newStatus)
    }, 10000); // en production il faudra mettre 10 secondes
    setTimeout(() => {
        if(valid) {
            console.log("arret des operations")
            clearInterval(interval)
            cancel({status: 'fail', cause: 'payment process fail'}, 1)
        }
    }, 2*60*1000); // en production c'est 5*60
}

const trackStatus2=async (id)=>{
}


export {roundDecimal, randomId, randomChain, trackStatus, trackStatus2, checkServiceId, trier }