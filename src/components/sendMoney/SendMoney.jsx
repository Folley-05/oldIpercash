import React from 'react'
import InputFloat from '../addons/input/InputFloat'

import './sendmoney.css'

function SendMoney() {
    return (
        <div className="send-money">
            <div className="receiver-info">
                <div className="form-container">
                    <div className="amount">
                        <InputFloat label="amount*" />
                    </div>
                    <div className="change">
                        <h2>1.00€==656 XAF</h2>
                    </div>
                        <h3>receiver's infomations</h3>
                    <div className="form">
                        <div className="inputBox">
                            <InputFloat label="Full Name*" placeholder="Ex: John" />
                        </div>
                        <div className="inputBox">
                            <InputFloat label="Phone Number*" placeholder="Ex: 629384939" />
                        </div>
                        <div className="inputBox">
                            <InputFloat label="Confirm Phone Number*" placeholder="it shoul match with phone number" />
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
                <div class="alert" role="alert">
                    <h6 class="alert-heading">Warning!</h6>
                    <hr/>
                    <p class="mb-0">Make sure you have entered the correct Mobile Account phone number.</p>
                </div>
            </div>
        </div>
    )
}

export default SendMoney

