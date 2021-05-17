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
        console.log(state);
        var raw = "{\n  \"email\": \"test@email.com\",\n  \"password\": \"1234567\"\n}";
        const requestOption={
            method: 'POST',
            body: raw,
            redirect: 'follow'
        }
        let res=fetch("https://new-ipercash-api.herokuapp.com/api/v1/auth", requestOption).then(response=>response.json()).then(res=>console.log(res))
        //console.log(res)
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
                    <button onClick={login}>Connexion</button>
                </div>
            </div>
        </div>
    )
}

export default LogIn
