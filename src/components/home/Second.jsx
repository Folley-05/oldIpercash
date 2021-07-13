import React from 'react'

import './second.css'
import image from './assets/Mtn-et-Orange.jpg'

function Second() {
    return (
        <div className="services">
            <div className="account-service">
                <div className="second-descript"><span className="service-description">Credit MTN Mobile Money or Orange Money account with your credit card or with cryptocurrency</span></div>
                <div className="mtn-orange"><img className="img-center" srcSet={image} alt=""/></div>
            </div><br/>
        </div>
    )
}

export default Second
