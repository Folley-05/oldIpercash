import React, { useState } from 'react'
import { FaCcVisa, FaCcMastercard } from 'react-icons/fa'
// import { SiMastercard } from 'react-icons/si'

import './sellcrypto.css'
import SelectFloat from '../addons/select/SelectFloat'
import InputFloat from '../addons/input/InputFloat'


const cryptoOption=[{label: "BitCoin", value: "bitcoin"}, {label: "Euther", value: "euther"}]
const paymentOption=[{label: "VisaCard", value: "visa"}, {label: "MasterCard", value: "master"}]
const Icon=[{icon: <FaCcMastercard size={40} />, value: "master"}, {icon: <FaCcVisa size={40} />, value: "visa"}]

function SellCrypto() {
    const [state, setState] = useState({
        crypto: "", payment: "", amount: 0, wallet: "", numAccount: "", nameAccount: ""
    })

    const handleChange=e=>{
        //console.log(e.name);
        let newState=state
        newState[e.name]=e.value
        setState({...state})
    }
    const sell=()=>{
        console.log(" you can sell crypto ")
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
        <div className="sell-crypto">
            <div className="sell-container">
                <h1 className="title">Sell Crypto Currencies</h1>
                <div className="sell-form">
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
                        <button disabled={active()} onClick={sell}>Sell</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SellCrypto
