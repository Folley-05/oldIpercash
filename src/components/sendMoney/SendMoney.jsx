import React, { useState } from 'react'
import { connect } from 'react-redux'
import { RampInstantSDK } from '@ramp-network/ramp-instant-sdk'

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
            hostAppName : 'Ipercash' , 
            hostLogoUrl : 'https://ipercash.fr/assets/logo-ipercash.jpeg',
            swapAsset: 'BCH',
            fiatCurrency: 'EUR',
            fiatValue: 15,
            userAddress: 'qpv6j55d02e0dyh2x08t0vgrpurkkjzupqhxzlzxsq',
        })
        api.show()
    }
    console.log(amount);
    return (
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
    )
}


const mapStateToProps=state=>({amount: state.amountReducer.amount})
export default connect(mapStateToProps)(SendMoney)

