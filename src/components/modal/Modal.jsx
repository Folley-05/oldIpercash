import React from 'react'
import ReactDom from 'react-dom'

import './modal.css'

const Modal=({dim, isShowing, hide, ...props}) => isShowing ? ReactDom.createPortal (
    <div className="modal">
        <div className="">
            <div className="modal-space" onClick={hide}></div>
            <div className="modal-wrapper"  style={dim}>
                <div className="modal-body">
                    {props.children}
                </div>
            </div>
        </div>
    </div>
, document.body) : null


export default Modal
               