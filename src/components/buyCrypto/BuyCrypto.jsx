import React, { useState, useEffect } from 'react'
import { FaCcVisa, FaCcMastercard } from 'react-icons/fa'
import { Modal } from 'react-responsive-modal';
import ReactLoading from 'react-loading'

import './buycrypto.css'
import SelectFloat from '../addons/select/SelectFloat'
import InputFloat from '../addons/input/InputFloat'
// import ModalLoading from '../addons/modals/ModalLoading'

import buy from '../../utils/buy'


const cryptoOption=[{label: "BitCoin", value: "bitcoin"}, {label: "Euther", value: "euther"}, {label: "BitCoinCash", value: "bitcoincash"}]
const paymentOption=[{label: "MTN Mobile Money", value: "visa"}, {label: "Orange Money", value: "master"}]
const Icon=[{icon: <FaCcMastercard size={40} />, value: "master"}, {icon: <FaCcVisa size={40} />, value: "visa"}]
const baseUrl="http://api.coinlayer.com/api/live?access_key=3b58f6abc8877da60261202189c62557&symbols=BTC,ETH,BCH&target=EUR"
// const baseUrl="https://api.smartbit.com.au/v1/exchange-rates"
// const baseUrl="https://api-instant.ramp.network/api/host-api/assets?currencies=GBP"

function BuyCrypto() {
    // initialisation des taux de changes
    const [rate, setRate] = useState({BCH: 575.69, BTC: 30731.41, ETH: 2075.48})
    // initialisation du state du composants
    const [state, setState] = useState({
        crypto: "BTC", operator: "", amount: 0, xaf: 0, eu: 0, rate: rate.BTC, number: "", confirmNumber: "", wallet: ""
    })
    const [modal, setModal] = useState(false)
    const openModal=()=>setModal(!modal)
    //on va charcher les bons taux de changes 
    // useEffect(() => {
    //     fetch(baseUrl, {method: 'GET'}).then(response=>response.json())
    //     .then(data=>{
    //         console.log("les data ", data)
    //         //setRate(data.rates)
    //         //setState({...state, rate: data.rates.BTC})
    //     })
    //     .catch(err=>console.log('err :>> ', err))
    // }, [])

    // fonction qui gere les changements des input de donnees
    const handleChange=e=>{
        //console.log(e.name);
        let newState=state
        newState[e.name]=e.value
        setState({...state})
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
    // fonction qui gere les changements de montants
    const amountChange=e=>{
        switch (e.name) { // amount c'est le montant en crypto monnaie 
            case "amount":
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
    console.log(modal);
    return (
        <div className="buy-crypto">
            <Modal open={modal} onClose={()=>setModal(!modal)} showCloseIcon={false} center classNames={{modal: 'custom-modal'}}>
                <h2>transaction en cours</h2>
                <div className="modal-loading">
                    <ReactLoading type="spinningBubbles" color='red' height='50%' width='50%' />
                </div>
            </Modal>
            <div className="buy-container">
                <h1 className="title">buy Crypto Currencies</h1>
                <div className="buy-form">
                    <div className="selectBox">
                        <div className="select"><SelectFloat label="Choose Crypto :" name="crypto" change={handleCurrencies} theme="ligth" option={cryptoOption} /></div>
                        <div className="icon"> <FaCcVisa size={40} /> </div>
                    </div>
                    <div className="crypto-rate">
                        <h3>Crypto Rate</h3>
                        <span>1 {state.crypto} === {state.rate*655} XAF === {state.rate} EU</span>
                    </div>
                    <div className="inputBox">
                        <InputFloat label="Amount In XAF" name="xaf" theme="ligth" change={amountChange} val={state.xaf} />
                    </div>
                    <div className="inputBox">
                        <InputFloat label="Amount In EU" name="eu" theme="ligth" change={amountChange} val={state.eu} />
                    </div>
                    <div className="inputBox">
                        <InputFloat label="Amount In Crypto" name="crypto" theme="ligth" change={amountChange} val={state.amount} />
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
                        <button disabled={active()} onClick={()=>buy(state, openModal)}>Buy</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyCrypto
