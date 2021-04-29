import React from 'react'

import './header.css'
import Navigation from './Navigation'
import enseigne from './assets/logo-ipercash.jpeg'

function Header() {
    return (
        <header>
            <div className="menu">
                <div className="control">Z</div>
            </div>
            <div className="wrapper">
                <div className="enseigne">
                    <img src={enseigne} alt="" srcset="" className="image-enseigne" />
                </div>
            </div>
        <nav className="navbar">
            <ul className="navigation">
                <li className="nav-item">Home</li>
                <li className="nav-item">Log In</li>
                <li className="nav-item">Sign Up</li>
                <li className="nav-item">Help</li>
            </ul>
        </nav>
        </header>
    )
}

export default Header
