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
        crypto: "", payment: "", amount: 0, xaf: 0, eu: 0, rate: 0.015, number: "", confirmNumber: "", wallet: ""
    })

    const handleChange=e=>{
        //console.log(e.name);
        let newState=state
        newState[e.name]=e.value
        setState({...state})
    }
    const amountChange=e=>{
        switch (e.name) {
            case "amount":
                console.log("c'est le montant")
                setState({...state, amount: e.value, xaf: e.value*state.rate*655, eu: e.value*state.rate})
            break
            case "xaf":
                console.log("c'est le xaf")
                setState({...state, xaf: e.value, amount:e.value*state.rate/655, eu: e.value/655})
            break;
            
            case "eu":
                console.log("c'est le eu")
                setState({...state, eu: e.value, amount:e.value*state.rate, xaf: e.value*655})
            break;
            default:
                console.log("c;est autre chose")
            break;
        }
    }
    const sell=()=>{
        console.log(" you can sell crypto ")
    }
    const active=()=>{
        if( false )
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
                        <div className="select"><SelectFloat label="Choose Crypto :" name="crypto" change={handleChange} theme="ligth" option={cryptoOption} /></div>
                        <div className="icon"> <FaCcVisa size={40} /> </div>
                    </div>
                    <div className="inputBox">
                        <InputFloat label="Crypto Rate" theme="ligth" name="rate" val={state.rate} />
                    </div>
                    <div className="inputBox">
                        <InputFloat label="Amount In Crypto" theme="ligth" name="amount" change={amountChange} val={state.amount} />
                    </div>
                    <div className="inputBox">
                        <InputFloat label="Amount In XAF" theme="ligth" name="xaf" change={amountChange} val={state.xaf} />
                    </div>
                    <div className="inputBox">
                        <InputFloat label="Amount In EU" theme="ligth" name="eu" change={amountChange} val={state.eu} />
                    </div>
                    <div className="selectBox">
                        <div className="select"><SelectFloat label="Mobile Money Operator :" name="operator" theme="ligth" option={paymentOption} /></div>
                        <div className="icon"> {selectIcon()} </div>
                    </div>
                    <div className="inputBox">
                        <InputFloat label="Mobile Phone Number" theme="ligth" name="number" />
                    </div>
                    <div className="inputBox">
                        <InputFloat label="Confirm Mobile Phone Number" theme="ligth" name="confirmNumber" />
                    </div>
                    <div className="inputBox">
                        <InputFloat label="Crypto Wallet Address" theme="ligth" name="wallet" change={handleChange} />
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
