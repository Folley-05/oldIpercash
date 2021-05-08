import React from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

import "./first.css"
import InputFloat from '../addons/input/InputFloat'
import { setAmount } from '../../redux/actions'

function First({dispatch}) {
    let history=useHistory()
    const submit=e=>{
        e.preventDefault()
        console.log("hello")
        dispatch(setAmount())
        history.push('/sendmoney')
        return false
    }
    console.log("les props",dispatch);
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
                            <form action="" onSubmit={submit}>
                                <div className="label-card">
                                    <InputFloat label="amount" theme="dark" />
                                </div>
                                <button type="submit" className="card-button" >Credit Mobile Account</button>
                            </form>
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


const mapStateToProps=state=>({amount: state.amountReducer.amount})
export default connect(mapStateToProps)(First)
