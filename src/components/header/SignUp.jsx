import React from 'react'

import './signup.css'
import InputFloat from '../addons/input/InputFloat'

function SignUp() {
    return (
        <div className="signup">
            <h1>Sign Up</h1>
            <hr/>
            <div className="signup-form">
                <div className="">
                    <InputFloat label="Email *" />
                </div>
                <div className="">
                    <InputFloat label="Pseudo *" />
                </div>
                <div className="">
                    <InputFloat label="Password *" />
                </div>
                <div className="">
                    <InputFloat label="Confirm Password *" />
                </div>
                <div className="">
                    <InputFloat label="Last Name *" />
                </div>
                <div className="">
                    <InputFloat label="First Name *" />
                </div>
                <div className="">
                    <InputFloat label="Country *" />
                </div>
                <div className="">
                    <InputFloat label="City *" />
                </div>
                <div className="">
                    <input type="checkbox" name="" id="checkbox"/>
                    <label htmlFor="checkboc">I accept <a href="">Terms and Condition</a> </label>
                </div>
                <div className="">
                    <button>Save</button>
                </div>
            </div>
        </div>
    )
}

export default SignUp
