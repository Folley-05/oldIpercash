import React from 'react'

import "./login.css"
import InputFloat from '../addons/input/InputFloat'

function LogIn() {
    return (
        <div className="login">
            <h1>Log In</h1>
            <hr/>
            <div className="login-form">
                <div className="">
                    <InputFloat label="Email" />
                </div>
                <div className="">
                    <InputFloat label="Password" />
                </div>
                <div className="">
                    <button>Connexion</button>
                </div>
            </div>
        </div>
    )
}

export default LogIn
