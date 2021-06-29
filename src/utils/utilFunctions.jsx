import { getStatus } from '../intouch/api'

const roundDecimal=(nombre)=>{
    var precision = 8;
    var tmp = Math.pow(10, precision);
    return Math.round( nombre*tmp )/tmp;
}

const checkServiceId=num=>{
    console.log("le numero ",num)
    if(num[1]==='7') return 'mtn'
    else if(num[1]==='8') return 'orange'
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
    return id1+id2
}

const trackStatus=(id, callBack)=>{
    console.log("trackstatus")
    let valid=false
    let status="PENDING"
    //getStatus(id)
    let interval=setInterval(async() => {
        let newStatus=await getStatus(id)
        if(newStatus!==status) {
            console.log("l'operation est terminee")
            clearInterval(interval)
            callBack(newStatus)
        }
        //console.log("le status  de trackstatus: ", newStatus)
    }, 10000);
    setTimeout(() => {
        clearInterval(interval)
        cancel()
    }, 5*60*1000);
    return status

}

const cancel=()=>{
    console.log("arret de toute activite")
    alert("arret de toute activite, le processus a echoue")
}

export {roundDecimal, randomId, trackStatus, cancel, checkServiceId }