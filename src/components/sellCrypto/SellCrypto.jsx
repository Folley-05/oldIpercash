import React, { useState, useEffect } from 'react'
import { FaCcVisa, FaCcMastercard } from 'react-icons/fa'
// import { SiMastercard } from 'react-icons/si'

import './sellcrypto.css'
import SelectFloat from '../addons/select/SelectFloat'
import InputFloat from '../addons/input/InputFloat'


const cryptoOption=[{label: "BitCoin", value: "bitcoin"}, {label: "Euther", value: "euther"}, {label: "BitCoinCash", value: "bitcoincash"}]
const paymentOption=[{label: "VisaCard", value: "visa"}, {label: "MasterCard", value: "master"}]
const Icon=[{icon: <FaCcMastercard size={40} />, value: "master"}, {icon: <FaCcVisa size={40} />, value: "visa"}]
const baseUrl="http://api.coinlayer.com/api/live?access_key=3b58f6abc8877da60261202189c62557&symbols=BTC,ETH,BCH&target=EUR"

function SellCrypto() {
    // initialisation des taux de changes
    const [rate, setRate] = useState({BCH: 7000, BTC: 30000, ETH: 16000})
    // initialisation du state du composants
    const [state, setState] = useState({
        crypto: "BTC", operator: "", amount: 0, xaf: 0, eu: 0, rate: rate.BTC, number: "", confirmNumber: "", wallet: ""
    })
    // on va charcher les bons taux de changes 
    useEffect(() => {
        fetch(baseUrl, {method: 'GET'}).then(response=>response.json())
        .then(data=>{
            setRate(data.rates)
            setState({...state, rate: data.rates.BTC})
        })
        .catch(err=>console.log('err :>> ', err))
    }, [])

    // fonction qui gere les changements des input de donnees
    const handleChange=e=>{
        //console.log(e.name);
        let newState=state
        newState[e.name]=e.value
        setState({...state})
    }
    // fonction qui gere les changements de montants
    const amountChange=e=>{
        console.log(state.rate)
        switch (e.name) {
            case "amount": // amount c'est le montant en crypto monnaie 
                console.log("c'est le montant")
                setState({...state, amount: e.value, xaf: e.value*state.rate*655, eu: e.value*state.rate})
            break
            case "xaf":
                console.log("c'est le xaf")
                setState({...state, xaf: e.value, amount:e.value/state.rate/655, eu: e.value/655})
            break;
            
            case "eu":
                console.log("c'est le eu")
                setState({...state, eu: e.value, amount:e.value/state.rate, xaf: e.value*655})
            break;
            default:
                console.log("c;est autre chose")
            break;
        }
    }
    // fonction qui gere les changements de cryptomonnaie
    const handleCurrencies=e=>{
        console.log(e.value)
        switch (e.value) {
            case "bitcoin":
                setState({...state, rate: rate.BTC, crypto: "BTC"})
            break;
            case "euther":
                setState({...state, rate: rate.ETH, crypto: "ETH"})
            break;
            case "bitcoincash":
                setState({...state, rate: rate.BCH, crypto: "BCH"})
            break;
            default:
            break;
        }
    }
    // fonction principale de vente 
    const sell=()=>{
        console.log(" you can sell crypto ")
    }
    // fonction qui gere l'activation du bouton
    const active=()=>{
        if( (state.crypto && state.operator && state.amount && state.number && state.wallet) && (state.number===state.confirmNumber) )
            return false
        else return true
    }
    // fonction qui gere les icones des select 
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
    //console.log(rate);
    return (
        <div className="sell-crypto">
            <div className="sell-container">
                <h1 className="title">Sell Crypto Currencies</h1>
                <div className="sell-form">
                    <div className="selectBox">
                        <div className="select"><SelectFloat label="Choose Crypto :" name="crypto" change={handleCurrencies} theme="ligth" option={cryptoOption} /></div>
                        <div className="icon"> <FaCcVisa size={40} /> </div>
                    </div>
                    <div className="crypto-rate">
                        <h3>Crypto Rate</h3>
                        <span>1 {state.crypto} === {state.rate*655} XAF === {state.rate} EU</span>
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
                        <div className="select"><SelectFloat label="Mobile Money Operator :" name="operator" change={handleChange} theme="ligth" option={paymentOption} /></div>
                        <div className="icon"> {selectIcon()} </div>
                    </div>
                    <div className="inputBox">
                        <InputFloat label="Mobile Phone Number" theme="ligth" name="number" change={handleChange} />
                    </div>
                    <div className="inputBox">
                        <InputFloat label="Confirm Mobile Phone Number" theme="ligth" name="confirmNumber" change={handleChange} />
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
