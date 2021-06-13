const apiUrl='http://127.0.0.1:8000/api/'
const serveiceId={
	cashOutOrange: 'CASHOUTOMCM',
	cashOutMtn: 'CASHOUTMTNCM',
	cashInOrange: 'CASHINOMCM',
	cashInMtn: 'CASHINMTNCM',
}

const getBalance=()=>{
    let requestOption={
        method: 'POST'
    }
    fetch(apiUrl+'getbalance', requestOption).then(response=>response.json()).then(data=>console.log(data))
    .catch(err=>console.log('err :>> ', err))
}

const getStatus=id=>{
    let formData=new FormData()
    formData.append('partner_id', id)
    let requestOption={
        method: 'POST',
        body: formData,
    }
    fetch(apiUrl+'getstatus', requestOption).then(response=>response.json()).then(data=>console.log(data))
    .catch(err=>console.log('err :>> ', err))
}

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
    fetch(apiUrl+'cashout', requestOption).then(response=>response.json()).then(data=>console.log(data))
    .catch(err=>console.log('err :>> ', err))

}

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