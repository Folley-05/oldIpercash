import React from 'react'

import './third.css'
import user1 from './assets/user1.png'
import receiver1 from './assets/receiver1.png'
import Bitcoin from './assets/Bitcoin.png'

function Third() {
    return (
        <div>
            <div class="text-title">
                <h2 class="">Only 3 Steps to credit a mobile mobile account</h2>
            </div>
            <div class="desktop-step">
                <div class="step">
                    <div class="step-head">
                        <h3 class="">STEP 1</h3>
                        <p class="">Create your account</p>
                        <hr />
                    </div>
                    <div class="step-body">
                        <img src={user1} class="img-fluid" alt="" srcset="" />
                    </div>
                </div>
                <div class="step">
                    <div class="step-head">
                        <h3 class="">STEP 2</h3>
                        <p class="">Fill receiver information</p>
                        <hr />
                    </div>
                    <div class="step-body">
                        <img src={receiver1} class="img-fluid" alt="" srcset="" />
                    </div>
                </div>
                <div class="step">
                    <div class="step-head">
                        <h3 class="">STEP 3</h3>
                        <p class="">Pay with your credit card or cryptocurrency</p>
                        <hr />
                    </div>
                    <div class="step-body">
                        <img src={Bitcoin} class="img-fluid" alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Third
