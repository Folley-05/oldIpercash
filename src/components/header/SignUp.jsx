import React, { useState } from 'react'

import './signup.css'
import InputFloat from '../addons/input/InputFloat'
import { act } from 'react-dom/test-utils'

function SignUp() {
    const [state, setState] = useState({
        email: '', password: '', confirmPassword: ''
    })
    const handleChange=e=>{
        let newState=state
        newState[e.name]=e.value
        setState({...state})
    }
    const signup=()=>{
        console.log("signup");
        let data=new FormData()
        data.append('email', state.email)
        data.append('password', state.password)
        data.append('password_confirmation', state.confirmPassword)
        let requestOptions = {
            method: 'POST',
            body: data,
            redirect: 'follow'
        }
        fetch("https://new-ipercash-api.herokuapp.com/users", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('errors', error));
    }
    const active=()=>{
        if((state.email && state.password) && (state.password===state.confirmPassword)) return false
        return true
    }
    return (
        <div className="signup">
            <h1>Sign Up</h1>
            <hr/>
            <div className="signup-form">
                <div className="">
                    <InputFloat label="Email *" name="email" theme="dark" change={handleChange} />
                </div>
                <div className="">
                    <InputFloat label="Pseudo *" name="" theme="dark" />
                </div>
                <div className="">
                    <InputFloat label="Password *" name="password" theme="dark" change={handleChange} />
                </div>
                <div className="">
                    <InputFloat label="Confirm Password *" name="confirmPassword" theme="dark" change={handleChange} />
                </div>
                <div className="">
                    <InputFloat label="Last Name *" theme="dark" />
                </div>
                <div className="">
                    <InputFloat label="First Name *" theme="dark" />
                </div>
                <div className="">
                    <InputFloat label="Country *" theme="dark" />
                </div>
                <div className="">
                    <InputFloat label="City *" theme="dark" />
                </div>
                <div className="">
                    <input type="checkbox" name="" id="checkbox"/>
                    <label htmlFor="checkboc">I accept <a href="">Terms and Condition</a> </label>
                </div>
                <div className="">
                    <button disabled={active()} onClick={signup}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default SignUp
