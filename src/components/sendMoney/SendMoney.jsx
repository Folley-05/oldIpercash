import React, { useState } from 'react'
import { connect } from 'react-redux'
import { RampInstantSDK } from '@ramp-network/ramp-instant-sdk'

import { randomId, randomChain } from '../../utils/utilFunctions'

import './sendmoney.css'
import InputFloat from '../addons/input/InputFloat'
import Modal from './Modal'

// import {mercuryoWidget} from 'https://widget.mercuryo.io/embed.2.0.js'

function SendMoney({amount}) {
    const [state, setState] = useState({
        montant: amount, name: "", phone: "", cPhone: ""
    })
    const [modal, setModal] = useState({open: false, closable: false, operationId: null, status: null})
    const handleChange=e=>{
        console.log(e.name);
        let newState=state
        newState[e.name]=e.value
        setState({...state})
    }
    let apiUrl='https://ipercash-api.herokuapp.com/'
    const send=()=>{
        //ramp()
        console.log(state)
        let params={"transaction_id":randomId(), "phone": state.phone, "name": state.name}
        const requestOption={
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            "body": JSON.stringify(params)
        }
        setModal({...modal, open: true, closable: false, operationId: params.transaction_id})
        window.open(apiUrl+'hello?d='+randomChain()+';'+state.montant*0.579+';'+params.transaction_id, '_blank')

        fetch(apiUrl+'api/init', requestOption)
        .then(response=>response.json()).then(data=>{
            console.log(data)
        })
        .then(async ()=>{
            let notdo=false
            do {
                notdo= await fetch(apiUrl+'api/getpayload', setRequestOption({transaction: params.transaction_id}))
                .then(response=>response.json()).then(data=>data.mobile_paid)
                .catch(err=>false)
            } while (notdo);
        })
        .catch(err=>console.log(" une erreur est survenu "))

    }
    const active=()=>{
        if(state.montant > 10 && state.name &&  state.phone && (state.phone===state.cPhone)) return false
        else return true
    }
    const ramp=()=>{
        let api=new RampInstantSDK({
            url: 'https://ri-widget-staging.firebaseapp.com',
            hostAppName : 'Ipercash', 
            hostLogoUrl : 'https://ramp.ipercash.fr/static/media/logo-ipercash.7177814f.png',
            swapAsset: 'BTC',
            fiatCurrency: 'EUR',
            fiatValue: state.amount,
            userAddress: '1LNRokCA5YMH82nzcwumyJW4YNJCJorXtB',
            //variant: 'embedded-desktop',
            containerNode: document.getElementById('ramp'),
            hostApiKey: 'wcc36f3psojgdhm3286fwzqnybrpg3gvbeyhcmcp',
        })
        api.on('WIDGET_CLOSE', event=>console.log("le widget c'est ferme"))
        .on('WIDGET_CONFIG_DONE', event=>console.log(event.type))
        .on('WIDGET_CLOSE_REQUEST_CANCELLED', event=>console.log("vous avez bien fait d'annuler"))
        .on('PURCHASE_CREATED', event=>console.log("creation de la transaction d'achat", event))
        .on('PURCHASE_SUCCESSFUL', event=>console.log("la transaction d'achat a reussie", event))
        .on('PURCHASE_FAILED', event=>console.log("la transaction d'achat a echouee", event))
        .show()
    }
    console.log(amount)

    const test=()=>{
        console.log("hello")
        const payload=JSON.parse("{\"eventId\":\"bf16c4fe-c400-418c-8dad-2df79b500d2d\",\"data\":{\"id\":\"06b15e045b8314822\",\"merchant_transaction_id\":\"06b15e045b8314822\",\"created_at\":\"2021-07-20 14:53:56\",\"updated_at\":\"2021-07-20 14:53:56\",\"type\":\"buy\",\"currency\":\"BTC\",\"amount\":\"0.00240125\",\"fiat_currency\":\"EUR\",\"fiat_amount\":\"25.00\",\"status\":\"paid\",\"created_at_ts\":1626792836,\"updated_at_ts\":1626792836,\"user\":{\"uuid4\":null,\"country_code\":null},\"card\":{\"number\":\"4321\"}}}")      
        console.log(payload)
        const requestOption={
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            "body": JSON.stringify(payload)
        }
        fetch('http://127.0.0.1:8000/api/test', requestOption)
        .then(response=>response.json()).then(data=>console.log(data))
    }
    const beforeTest=()=>{
        window.open('http://127.0.0.1:8000/test?d='+randomChain()+';'+state.montant*0.579+';'+"randomhere", '_blank')
    }
    const setRequestOption=body=>({
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "Accept": "application/json",
            // "mode":"no-cors"
        },
        "body": JSON.stringify(body)
    })

    const simulate=()=>{
        console.log(" start emulation ")
        let idt=randomId()
        let params={"transaction_id":idt, "phone": state.phone, "name": state.name}
        const payload1=JSON.parse("{\"eventId\":\"bf16c4fe-c400-418c-8dad-2df79b500d2d\",\"data\":{\"id\":\"06b15e045b8314822\",\"merchant_transaction_id\":\""+idt+"\",\"created_at\":\"2021-07-20 14:53:56\",\"updated_at\":\"2021-07-20 14:53:56\",\"type\":\"buy\",\"currency\":\"BTC\",\"amount\":\"0.00240125\",\"fiat_currency\":\"EUR\",\"fiat_amount\":\"25.00\",\"status\":\"new\",\"created_at_ts\":1626792836,\"updated_at_ts\":1626792836,\"user\":{\"uuid4\":null,\"country_code\":null},\"card\":{\"number\":\"4321\"}}}")      
        const payload2=JSON.parse("{\"eventId\":\"bf16c4fe-c400-418c-8dad-2df79b500d2d\",\"data\":{\"id\":\"06b15e045b8314822\",\"merchant_transaction_id\":\""+idt+"\",\"created_at\":\"2021-07-20 14:53:56\",\"updated_at\":\"2021-07-20 14:53:56\",\"type\":\"buy\",\"currency\":\"BTC\",\"amount\":\"0.00240125\",\"fiat_currency\":\"EUR\",\"fiat_amount\":\"25.00\",\"status\":\"pending\",\"created_at_ts\":1626792836,\"updated_at_ts\":1626792836,\"user\":{\"uuid4\":null,\"country_code\":null},\"card\":{\"number\":\"4321\"}}}")      
        const payload3=JSON.parse("{\"eventId\":\"bf16c4fe-c400-418c-8dad-2df79b500d2d\",\"data\":{\"id\":\"06b15e045b8314822\",\"merchant_transaction_id\":\""+idt+"\",\"created_at\":\"2021-07-20 14:53:56\",\"updated_at\":\"2021-07-20 14:53:56\",\"type\":\"buy\",\"currency\":\"BTC\",\"amount\":\"0.00240125\",\"fiat_currency\":\"EUR\",\"fiat_amount\":\"25.00\",\"status\":\"paid\",\"created_at_ts\":1626792836,\"updated_at_ts\":1626792836,\"user\":{\"uuid4\":null,\"country_code\":null},\"card\":{\"number\":\"4321\"}}}")      
        const payload4=JSON.parse("{\"eventId\":\"bf16c4fe-c400-418c-8dad-2df79b500d2d\",\"data\":{\"id\":\"06b15e045b8314822\",\"merchant_transaction_id\":\""+idt+"\",\"created_at\":\"2021-07-20 14:53:56\",\"updated_at\":\"2021-07-20 14:53:56\",\"type\":\"buy\",\"currency\":\"BTC\",\"amount\":\"0.00240125\",\"fiat_currency\":\"EUR\",\"fiat_amount\":\"25.00\",\"status\":\"cancelled\",\"created_at_ts\":1626792836,\"updated_at_ts\":1626792836,\"user\":{\"uuid4\":null,\"country_code\":null},\"card\":{\"number\":\"4321\"}}}")      
        

        //window.open('http://127.0.0.1:8000/hello?d='+randomChain()+';'+state.montant*0.579+';'+params.transaction_id, '_blank')
        /*let timeout=setTimeout(() => {
            window.open('http://127.0.0.1:8000/hello?d='+randomChain()+';'+state.montant*0.579+';'+params.transaction_id, '_blank')
        }, 3000);*/

        setModal({...modal, open: true, closable: false, operationId: params.transaction_id})
        console.log("debut de fetch")
        fetch('http://127.0.0.1:8000/api/init', setRequestOption(params))
        .then(response=>response.json()).then(()=>{
            //window.open('https://ipercash-api.herokuapp.com/hello?d='+randomChain()+';'+state.montant*0.579+';'+params.transaction_id, '_blank')
            fetch('http://127.0.0.1:8000/api/test', setRequestOption(payload1))
            .then(()=>{
                fetch('http://127.0.0.1:8000/api/test', setRequestOption(payload2))
                .then(()=>{
                    fetch('http://127.0.0.1:8000/api/test', setRequestOption(payload3))
                    .then(response=>response.json()).then(data=>{
                        console.log("le payment est effectue ", data)
                        console.log("l'argent va etre envoye dans le compte")
                        setModal({operationId: params.transaction_id, open: true, closable: true, status: 'success' })
                    })
                    .catch(()=>console.log("erreur de la payload paid"))
                })
                .catch(()=>console.log("erreur de la payload pending"))
            })
            .catch(()=>console.log("erreur lors de la payload new"))

        })
        .catch(err=>{
            console.log("une erreur est survenu : ", err)
            //clearTimeout(timeout)
        })

    }

    return (
        <>
        <Modal option={modal} close={()=>setModal({open: false, closable: false})}  />
        <div className="send-money">
            <div className="receiver-info">
                <div className="form-container">
                    <div className="amount">
                        <InputFloat label="amount*" val={state.montant} theme="dark" required={true} name="montant" change={handleChange} />
                    </div>
                    <div className="change">
                        <h2>1.00€==656 XAF</h2>
                    </div>
                        <h3>receiver's infomations</h3>
                    <div className="form">
                        <div className="inputBox">
                            <InputFloat label="Full Name*" theme="dark" required={true} name="name"  change={handleChange} placeholder="Ex: John" />
                        </div>
                        <div className="inputBox">
                            <InputFloat label="Phone Number*" theme="dark" required={true} name="phone" change={handleChange} placeholder="Ex: 629384939" />
                        </div>
                        <div className="inputBox">
                            <InputFloat label="Confirm Phone Number*" theme="dark" required={true} name="cPhone" change={handleChange} placeholder="it shoul match with phone number" />
                        </div>
                        <div className="checkbox">
                            <input type="checkbox" id="save"/>
                            <label htmlFor="save">Save these informations</label>
                        </div>
                        <div className="buttonbox">
                            <button disabled={active()} onClick={send}>Continue</button>
                        </div>
                        <div className="buttonbox">
                            <button disabled={active()} onClick={simulate}>simulate</button>
                        </div>
                        <div className="buttonbox">
                            <button onClick={beforeTest}>before</button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="resume">
                <h4 className="resume-title">Transaction Summary</h4><hr/>
                <div class="resume-block">
                    <div class="">Transfer Amount</div>
                    <div class="">{ state.montant } EUR</div>
                </div><hr/>
                <div class="resume-block">
                    <div class="">Fees</div>
                    <div class="">{ state.montant*0.1 } EUR</div>
                </div><hr/>
                <div class="resume-block">
                    <div class="">Total Amount</div>
                    <div class="">{ state.montant*1.1 } EUR</div>
                </div><hr/>
                <div class="resume-block">
                    <div class="">Mobile Mobile Account will receive</div>
                    <div class=""> { 656*state.montant } XAF</div>
                </div>
                <div class="alert" role="alert">
                    <h6 class="alert-heading">Warning!</h6>
                    <hr/>
                    <p class="mb-0">Make sure you have entered the correct Mobile Account phone number.</p>
                </div>
            </div>
        </div>
    <div id="mercuryo-widget"></div>

        </>
    )
}


const mapStateToProps=state=>({amount: state.amountReducer.amount})
export default connect(mapStateToProps)(SendMoney)

