const apiUrl='http://127.0.0.1:8000/api/'
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
    let status= await fetch(apiUrl+'getstatus', requestOption).then(response=>response.json())
    .then(({intouch})=>{
        return intouch.status
    })
    return status
}

// fonction qui retire de l'argent du compte du client
const cashOut=params=>{
    let formData=new FormData()
    formData.append('partner_id', params.partner_id)
    formData.append('amount', params.amount)
    formData.append('service', params.service='mtn' ? serveiceId.cashOutMtn : serveiceId.cashOutOrange)
    formData.append('number', params.number)
    let requestOption={
        method: 'POST',
        body: formData
    }
    fetch(apiUrl+'cashout', requestOption).then(response=>response.json())
    .then(data=>{
        console.log(data)
        if(data.intouch) {
            console.log("c'est arrive chez intouch")
            if(data.status==="PENDING") {
                console.log("la requete est en attente chez intouch")
                return params.partner_id
            }
            else {
                console.log("intouch a rejette la requete")
                return false
            }
        }
        else {
            console.log("y a eu une erreur")
            return false
        }
    })
    .catch(err=>console.log('err :>> ', err))

}

// fonction qui envoie de l'argent vers le compte du client
const cashIn=params=>{
    let formData=new FormData()
    formData.append('partner_id', params.partner_id)
    formData.append('amount', params.amount)
    formData.append('service', params.service='mtn' ? serveiceId.cashInMtn : serveiceId.cashInOrange)
    formData.append('number', params.number)
    let requestOption={
        method: 'POST',
        body: formData
    }
    fetch(apiUrl+'cashout', requestOption).then(response=>response.json()).then(data=>console.log(data))
    .catch(err=>console.log('err :>> ', err))

}


export { getBalance, getStatus, cashIn, cashOut }