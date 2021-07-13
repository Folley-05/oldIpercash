import React, { useState } from 'react'
import { FaAngleRight, FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import './header.css'
import LogIn from './LogIn'
import SignUp from './SignUp'
import useModal from '../modal/useModal'
import Modal from '../modal/Modal'

import MobileNavigation from './MobileServices'
import enseigne from './assets/logo-ipercash.png'

function Header() {
    const {isShowing, toogle}=useModal()
    const [block, setBlock] = useState(1)
    const showBlock=i=>{
        setBlock(i)
        toogle()
    }
    return (
        <header>
            <div className="wrapper">
                <div className="enseigne">
                    <img srcSet={enseigne} alt="" className="image-enseigne" />
                </div>
            </div>
            <nav className="navbar">
                <input id="group-nav" type="checkbox" hidden />
                <label className="hamburger" htmlFor="group-nav"><span> <FaBars size={25} /> </span></label>
                <ul className="navigation">
                    <li className="nav-item">Help</li>
                    <li className="nav-item" onClick={()=>showBlock(2)}>Sign Up</li>
                    <li className="nav-item" onClick={()=>showBlock(1)}>Log In</li>
                    <li className="nav-item dropdown">
                        <div className="services-desktop">
                            <div className="dropbtn">Services <FaAngleRight /></div>
                            <div className="dropdown-content">
                                <ul>
                                    <Link to='/sendmoney'><li className="service-item">Send Money</li></Link>
                                    <span className="line"/>
                                    <Link to='/buycrypto'><li className="service-item">Buy Crypto</li></Link>
                                    <span className="line"/>
                                    <Link to='/sellcrypto'><li className="service-item">Sell Crypto</li></Link>

                                </ul>
                            </div>
                        </div>
                        <div className="services-mobile">
                            {/* <div className="dropbtn" onClick={()=>setDropdown(!dropdown)}>Services <FaCaretDown /></div> */}
                            <MobileNavigation />
                        </div>
                    </li>
                    <li className="nav-item">Home</li>
                </ul>
            </nav>
            <Modal isShowing={isShowing} hide={toogle}>
                {block===1 ? <LogIn />: <SignUp /> }
            </Modal>
        </header>
    )
}

export default Header


// {dropdown && <div className="dropdown-content">
//                                 <Link to='/sendmoney'><li className="service-item">Send Money</li></Link>
//                                 <span className="line"/>
//                                 <Link to='/buycrypto'><li className="service-item">Buy Crypto</li></Link>
//                                 <span className="line"/>
//                                 <Link to='/sellcrypto'><li className="service-item">Sell Crypto</li></Link>
//                             </div>}