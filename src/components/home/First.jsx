import React from 'react'

import "./first.css"
import image1 from './assets/family.jpg'

function First() {
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
                            <label htmlFor="" class="label-card">Ammount</label>
                            <input type="text" placeholder="entrez le montant" class="input-card"/>
                            <button className="card-button">Credit Mobile Account</button>
                        </div>
                        <div className="body-footer">
                            <button className="card-button">Sell Crypto</button>
                            <button className="card-button">Buy Crypto</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default First
