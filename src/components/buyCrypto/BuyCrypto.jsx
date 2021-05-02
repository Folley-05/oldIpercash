import React from 'react'
import { FaCcVisa, FaCcMastercard } from 'react-icons/fa'

import './buycrypto.css'
import SelectFloat from '../addons/select/SelectFloat'
import InputFloat from '../addons/input/InputFloat'

function BuyCrypto() {
    return (
        <div className="buy-crypto">
            <div className="buy-container">
                <h1 className="title">Buy Crypto Currencies</h1>
                <div className="buy-form">
                    <div className="selectBox">
                        <div className="select"><SelectFloat label="Crypto Currency :" theme="ligth" /></div>
                        <div className="icon"> <FaCcVisa size={40} /> </div>
                    </div>
                    <div className="selectBox">
                        <div className="select"><SelectFloat label="Payment Way :" /></div>
                        <div className="icon"> <FaCcMastercard size={40} /> </div>
                    </div>
                    <div className="inputBox">
                        <InputFloat label="Montant" />
                    </div>
                    <div className="inputBox">
                        <InputFloat label="Adresse Wallet" />
                    </div>
                    <div className="inputBox">
                        <InputFloat label="Numero Du Compte" />
                    </div>
                    <div className="inputBox">
                        <InputFloat label="Nom Du Compte" />
                    </div>
                    <div className="buttonBox">
                        <button>Buy</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyCrypto
