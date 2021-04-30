import React from 'react'

import './sendmoney.css'

function SendMoney() {
    return (
        <div className="send-money">
            <div className="receiver-info">
                <div className="form-container">
                    <div className="amount">
                        <div className="inputBox">
                            <input type="text" id="amount"/>
                            <label htmlFor="amount">Amount to Send*</label>
                        </div>
                    </div>
                    <div className="change">
                        <h2>1.00€==656 XAF</h2>
                    </div>
                        <h3>receiver's infomations</h3>
                    <div className="form">
                        <div className="inputBox">
                            <input type="text" id="fullname"/>
                            <label htmlFor="fullname">Full Name</label>
                        </div>
                        <div className="inputBox">
                            <input type="phone" id="phone"/>
                            <label htmlFor="phone">Phone Number</label>
                        </div>
                        <div className="inputBox">
                            <input type="phone" id="cphone"/>
                            <label htmlFor="cphone">Confirm Phone</label>
                        </div>
                        <div className="checkbox">
                            <input type="checkbox" id="save"/>
                            <label htmlFor="save">Save these informations</label>
                        </div>
                        <div className="buttonbox">
                            <button>Continue</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="resume">
                <h4 className="resume-title">Transaction Summary</h4><hr/>
                <div class="resume-block">
                    <div class="">Transfer Amount</div>
                    <div class="">2 EUR</div>
                </div><hr/>
                <div class="resume-block">
                    <div class="">Fees</div>
                    <div class="">2 EUR</div>
                </div><hr/>
                <div class="resume-block">
                    <div class="">Total Amount</div>
                    <div class="">2 EUR</div>
                </div><hr/>
                <div class="resume-block">
                    <div class="">Mobile Mobile Account will receive</div>
                    <div class=""> 1000 XAF</div>
                </div>
                <div class="alert alert-danger" role="alert">
                    <h6 class="alert-heading">Warning!</h6>
                    <hr/>
                    <p class="mb-0">Make sure you have entered the correct Mobile Account phone number.</p>
                </div>
            </div>
        </div>
    )
}

export default SendMoney
