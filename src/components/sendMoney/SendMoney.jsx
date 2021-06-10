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
        .show()
    }
    console.log(amount);

    const testApiWallet=()=>{
        console.log("test wallet api")
        fetch("https://testnet-api.smartbit.com.au/v1/blockchain/address/mozebpMjZjBVqgKAXWHYtgwrNdq4JTeVgA", {method: 'GET'})
        .then(res=>res.json()).then(data=>console.log(data))
        .catch(err=>console.log(err))
    }
    const sendtest=()=>{
        console.log("send bitcointest")
        // let hex='0200000001352ffac305c57d14e3e1570ddba810b47609f5c04c4daf0e99c763c459104f74000000008a47304402202ac5e8498c7bac477952a7fb63fad616841329267bfc658cc10bdcb1f4c7304b02202f401e97f1f73be256fd7f17f2de785dcaeecd205f1ab5c669140e23923622210141046d08fcaf97148dbd6ab9ab3a00e83afd95ad471d8e57e64ae7496e60cc173aa60b8bae5a3c9bd75e6ff666449b839a3beea591aa0394d3401184d7b978b6e768ffffffff01d07c2b00000000001976a9145cfde21a42acd074450a247d28aecafad58c95c688ac00000000'
        // let form=new FormData()
        // let myHeaders=new Headers()
        // form.append('hex', hex)
        let data={ hex: "0200000001b95e7f8bd3b539aaae9dbcff5a3e54bf7b3cad03d1412c32e9aeffda62ca2999000000008b4830450221008acc7dcb6f30cb1101a3892acdfa424869c0cd9cc7deb9e2c2aeeabbafe672bf02204b9ad28d22c77579edd3711afe773693a5c6642a4c2c38d76d99db380493a08a0141046ec52ee066f639a17ce232013932eca695f3bb8a810d9c17e4841dd18e066811b08cae16eea9010fb94fc18d919dcdbad2600347c279e944cc634eb71b49ac75ffffffff01083900000000000017a914494600efdfe03445c5e34aae5406e0e5811c42948700000000" }
        let requestOption={
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                Accept: 'application/json'
            }
        }
        fetch("https://api.smartbit.com.au/v1/blockchain/pushtx", requestOption)
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
            <button onClick={sendtest}>send BitCoinTest</button>
        </div>
        </>
    )
}


const mapStateToProps=state=>({amount: state.amountReducer.amount})
export default connect(mapStateToProps)(SendMoney)

