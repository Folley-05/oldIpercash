import { getStatus } from '../intouch/api'

const checkServiceId=num=>{

}

const randomId=()=>{
    let id1=Math.floor((1+Math.random())*0x100000000000000).toString(20).substring(1)
    let id2=Math.floor((1+Math.random())*0x100000000000000).toString(20).substring(1)
    return id1+id2
}

const trackStatus=(id, callBack)=>{
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
    }, 5000);
    /*setTimeout(() => {
        clearInterval(interval)
    }, 25000);*/
    return status

}

const cancel=()=>{
    console.log("arret de toute activite")
}

export { randomId, trackStatus, cancel, checkServiceId }