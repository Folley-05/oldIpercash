const checkServiceId=num=>{

}

const randomId=()=>{
    let id1=Math.floor((1+Math.random())*0x100000000000000).toString(20).substring(1)
    let id2=Math.floor((1+Math.random())*0x100000000000000).toString(20).substring(1)
    return id1+id2
}

export { randomId }