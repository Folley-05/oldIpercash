import React from 'react'
import { Link } from 'react-router-dom'
import { FaChevronCircleRight } from 'react-icons/fa'

import './mobilenavigation.css'

function MobileNavigation() {
    return (
        <div class="nav">
          <ul class="nav__list">
            <li>
              <input id="group-1" type="checkbox" hidden />
              <label for="group-1"><span class="fa fa-angle-right"> <FaChevronCircleRight /> </span> Services</label>
              <ul class="group-list">
                <Link to='/sendmoney'><li className="service-item">Send Money</li></Link>
                <span className="line"/>
                <Link to='/buycrypto'><li className="service-item">Buy Crypto</li></Link>
                <span className="line"/>
                <Link to='/sellcrypto'><li className="service-item">Sell Crypto</li></Link>
              </ul>
            </li>
          </ul>
        </div>
    )
}

export default MobileNavigation
