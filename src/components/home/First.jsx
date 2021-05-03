import React from 'react'
import { useHistory } from 'react-router-dom'

import "./first.css"
import InputFloat from '../addons/input/InputFloat'

import image1 from './assets/family.jpg'

function First() {
    let history=useHistory()
    console.log(history);
    return (
        <div className="banner">
            <div className="banner-container">
                <div className="text-banner">
                    <h1 className="title"><span className="span-red">Buy</span> and <span className="span-red">Sell</span> Crypto currencies</h1>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h3>Make a Mobile Money Deposit</h3>
                    </div>
                    <div className="card-body">
                        <div className="form">
                            <div className="label-card">
                                <InputFloat label="amount" theme="dark" />
                            </div>
                            <button className="card-button" onClick={()=>history.push('/sendmoney')}>Credit Mobile Account</button>
                        </div>
                        <div className="body-footer">
                            <button className="card-button" onClick={()=>history.push('/sellcrypto')}>Sell Crypto</button>
                            <button className="card-button" onClick={()=>history.push('/buycrypto')}>Buy Crypto</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default First
