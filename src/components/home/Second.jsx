import React from 'react'

import './second.css'
import image from './assets/Mtn-et-Orange.jpg'

function Second() {
    return (
        <div className="services">
            <div class="account-service">
                <div class="second-descript"><span class="service-description">Credit MTN Mobile Money or Orange Money account with your credit card or with cryptocurrency</span></div>
                <div class="mtn-orange"><img class="img-center" src={image} alt="" srcset=""/></div>
            </div><br/>
        </div>
    )
}

export default Second
