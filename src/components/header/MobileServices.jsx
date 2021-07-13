import React from 'react'
import { Link } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa'

import './mobileservices.css'

function MobileNavigation() {
    return (
        <div>
          <ul className="nav__list">
              <input id="group-1" type="checkbox" hidden />
              <label htmlFor="group-1"><span> <FaAngleRight /> </span> Services</label>
              <ul className="group-list">
                <Link to='/sendmoney'><li className="service-item">Send Money</li></Link>
                <span className="line"/>
                <Link to='/buycrypto'><li className="service-item">Buy Crypto</li></Link>
                <span className="line"/>
                <Link to='/sellcrypto'><li className="service-item">Sell Crypto</li></Link>
              </ul>
          </ul>
        </div>
    )
}

export default MobileNavigation
