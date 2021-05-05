import React, { useState } from 'react'

import './header.css'
import LogIn from './LogIn'
import SignUp from './SignUp'
import useModal from '../modal/useModal'
import Modal from '../modal/Modal'

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
                    <li className="nav-item" onClick={()=>showBlock(2)}>Sign Up</li>
                    <li className="nav-item" onClick={()=>showBlock(1)}>Log In</li>
                    <li className="nav-item">Help</li>
                </ul>
            </nav>
            <Modal isShowing={isShowing} hide={toogle}>
                {block===1 ? <LogIn />: <SignUp /> }
            </Modal>
        </header>
    )
}

export default Header
