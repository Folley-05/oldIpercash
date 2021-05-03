import React, { useState } from 'react'
import { FaCcVisa, FaCcMastercard } from 'react-icons/fa'

import './buycrypto.css'
import SelectFloat from '../addons/select/SelectFloat'
import InputFloat from '../addons/input/InputFloat'


const cryptoOption=[{label: "BitCoin", value: "bitcoin"}, {label: "Euther", value: "euther"}]
const paymentOption=[{label: "VisaCard", value: "visa"}, {label: "MasterCard", value: "master"}]
const Icon=[{icon: <FaCcMastercard size={40} />, value: "master"}, {icon: <FaCcVisa size={40} />, value: "visa"}]


function BuyCrypto() {
    const [state, setState] = useState({
        crypto: "", payment: "", amount: 0, wallet: "", numAccount: "", nameAccount: ""
    })

    const handleChange=e=>{
        //console.log(e.name);
        let newState=state
        newState[e.name]=e.value
        setState({...state})
    }
    const buy=()=>{
        console.log(" you can buy crypto ")
    }
    const active=()=>{
        if( state.amount>0 && state.crypto && state.payment && state.wallet && state.numAccount && state.nameAccount )
            return false
        else return true
    }
    const selectIcon=()=>{
        let icon=null
        Icon.map((data, i)=>{
            if(data.value==state.payment) {
                //console.log(data.icon);
                icon=i
            }
        })
        if(icon!==null) return Icon[icon].icon
    }
    console.log(state);
    return (
        <div className="buy-crypto">
            <div className="buy-container">
                <h1 className="title">buy Crypto Currencies</h1>
                <div className="buy-form">
                    <div className="selectBox">
                        <div className="select"><SelectFloat label="Crypto Currency :" name="crypto" change={handleChange} theme="ligth" option={cryptoOption} /></div>
                        <div className="icon"> <FaCcVisa size={40} /> </div>
                    </div>
                    <div className="selectBox">
                        <div className="select"><SelectFloat label="Payment Way :" name="payment" change={handleChange} theme="ligth" option={paymentOption} /></div>
                        <div className="icon"> {selectIcon()} </div>
                    </div>
                    <div className="inputBox">
                        <InputFloat label="Montant" name="amount" change={handleChange} />
                    </div>
                    <div className="inputBox">
                        <InputFloat label="Adresse Wallet" name="wallet" change={handleChange} />
                    </div>
                    <div className="inputBox">
                        <InputFloat label="Numero Du Compte" name="numAccount" change={handleChange} />
                    </div>
                    <div className="inputBox">
                        <InputFloat label="Nom Du Compte" name="nameAccount" change={handleChange} />
                    </div>
                    <div className="buttonBox">
                        <button disabled={active()} onClick={buy}>buy</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyCrypto
