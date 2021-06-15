const apiUrl='https://ipercash-api.herokuapp.com/api/'
const serveiceId={
	cashOutOrange: 'CASHOUTOMCM',
	cashOutMtn: 'CASHOUTMTNCM',
	cashInOrange: 'CASHINOMCM',
	cashInMtn: 'CASHINMTNCM',
}

// fonction qui retourne le solde du compte intouch
const getBalance=()=>{
    let requestOption={
        method: 'POST'
    }
    fetch(apiUrl+'getbalance', requestOption).then(response=>response.json()).then(data=>console.log(data))
    .catch(err=>console.log('err :>> ', err))
}

// fontion qui retourne le statut d'une operation
const getStatus=async(id)=>{
    let formData=new FormData()
    formData.append('partner_id', id)
    let requestOption={
        method: 'POST',
        body: formData,
    }
    let status=await fetch(apiUrl+'getstatus', requestOption).then(response=>response.json())
    .then(({intouch})=>{
        console.log(intouch)
        return intouch.status
    })
    return status
}

// fonction qui retire de l'argent du compte du client
const cashOut=async(params)=>{
    let formData=new FormData()
    formData.append('partner_id', params.partner_id)
    formData.append('amount', params.amount)
    formData.append('service', params.service==='mtn' ? serveiceId.cashOutMtn : serveiceId.cashOutOrange)
    formData.append('number', params.number)
    let requestOption={
        method: 'POST',
        body: formData
    }
    let status=await fetch(apiUrl+'cashout', requestOption).then(response=>response.json())
    .then(data=>{
        console.log(data)
        if(data.intouch) {
            console.log("c'est arrive chez intouch")
            if(data.intouch.status==="PENDING") {
                console.log("la requete est en attente chez intouch")
                return params.partner_id
            }
            else {
                console.log("intouch a rejette la requete", data)
                return false
            }
        }
        else {
            console.log("y a eu une erreur sur le midleware")
            return false
        }
    })
    .catch(err=>console.log('err :>> ', err))
    return status

}

// fonction qui envoie de l'argent vers le compte du client
const cashIn=async(params)=>{
    let formData=new FormData()
    formData.append('partner_id', params.partner_id)
    formData.append('amount', params.amount)
    formData.append('service', params.service='mtn' ? serveiceId.cashInMtn : serveiceId.cashInOrange)
    formData.append('number', params.number)
    let requestOption={
        method: 'POST',
        body: formData
    }
    let status=await fetch(apiUrl+'cashout', requestOption)
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(err=>console.log('err :>> ', err))
    return status

}


export { getBalance, getStatus, cashIn, cashOut }