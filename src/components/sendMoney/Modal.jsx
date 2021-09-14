import React from 'react'
import { Modal } from 'react-responsive-modal';
import ReactLoading from 'react-loading'
import { FaCheck } from 'react-icons/fa'

import './modal.css'

function CoverModal({option, close}) {
    console.log(option)
    return (
        <Modal open={option.open} center
            onClose={ option.closable ? ()=>close() : ()=>{}}  
            classNames={{
            overlay: 'customOverlay',
            modal: 'customModal',
            }}
        >
            <div className="content">
                <h1> Transfert en cours </h1>
                <p>
                    l'identifiant de votre operation est <b> { option.operationId } </b> <br/> utilisez le pour toute revendication
                </p>
                {option.status==='success' ? (<FaCheck size={50} color='#05e8a5' />) : (<ReactLoading type="spinningBubbles" color='#05e8a5' height='100px' width='100px' />) }
                
                <p>
                    { option.status==='success' ? "operation terminee" : "finalisez l'operation sur le widget" }
                </p>
            </div>
        </Modal>
    )
}

export default CoverModal