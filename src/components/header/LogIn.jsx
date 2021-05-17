import React, { useState } from 'react'

import "./login.css"
import InputFloat from '../addons/input/InputFloat'

function LogIn() {
    const [state, setState] = useState({email: '', password: ''})
    const handleChange=e=>{
        let newState=state
        newState[e.name]=e.value
        setState({...state})
    }
    const login=()=>{
        console.log("login");
        let data=new FormData()
        data.append('email', state.email)
        data.append('password', state.password)
        let requestOptions = {
            method: 'POST',
            body: data,
            redirect: 'follow'
        }
        fetch("https://new-ipercash-api.herokuapp.com/api/v1/auth", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('errors', error));
    }
    const active=()=>{
        if(state.email && state.password) return false
        return true
    }
    return (
        <div className="login">
            <h1>Log In</h1>
            <hr/>
            <div className="login-form">
                <div className="">
                    <InputFloat label="Email" name="email" theme="dark" change={handleChange} />
                </div>
                <div className="">
                    <InputFloat label="Password" name="password" theme="dark" change={handleChange} />
                </div>
                <div className="">
                    <button disabled={active()} onClick={login}>Connexion</button>
                </div>
            </div>
        </div>
    )
}

export default LogIn
