import React, { useState } from 'react'
import { connect } from 'react-redux'
import { RampInstantSDK } from '@ramp-network/ramp-instant-sdk'

import { getBalance, getStatus } from '../../intouch/api'

import './sendmoney.css'
import InputFloat from '../addons/input/InputFloat'

function SendMoney({amount}) {
    const [state, setState] = useState({
        montant: amount, name: "", phone: "", cPhone: ""
    })
    const handleChange=e=>{
        console.log(e.name);
        let newState=state
        newState[e.name]=e.value
        setState({...state})
    }
    const send=()=>{
        ramp()
    }
    const active=()=>{
        if(state.montant > 10 && state.name && state.phone) return false
        else return true
    }
    const ramp=()=>{
        let api=new RampInstantSDK({
            url: 'https://ri-widget-staging.firebaseapp.com',
            hostAppName : 'Ipercash', 
            hostLogoUrl : 'https://ramp.ipercash.fr/static/media/logo-ipercash.7177814f.png',
            swapAsset: 'BCH',
            fiatCurrency: 'EUR',
            fiatValue: state.amount,
            userAddress: 'qpv6j55d02e0dyh2x08t0vgrpurkkjzupqhxzlzxsq',
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
    console.log(amount);

    const testApiWallet=()=>{
        console.log("test wallet api")
        fetch("https://testnet-api.smartbit.com.au/v1/blockchain/address/mozebpMjZjBVqgKAXWHYtgwrNdq4JTeVgA", {method: 'GET'})
        .then(res=>res.json()).then(data=>console.log(data))
        .catch(err=>console.log(err))
    }

    return (
        <>
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
        <div className="buttonbox">
            <button onClick={testApiWallet}>Check Wallet</button>
        </div><br/>
        <div className="buttonbox">
            <button onClick={()=>getStatus('_8EqIfFUgqpKkNFtEFdjhfjHLvZcd0_7q17MIxA63t2GfTZqn5528oiuy04')}>Get Balance</button>
        </div>
        </>
    )
}


const mapStateToProps=state=>({amount: state.amountReducer.amount})
export default connect(mapStateToProps)(SendMoney)

