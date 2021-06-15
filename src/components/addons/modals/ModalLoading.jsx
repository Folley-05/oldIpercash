import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ReactLoading from 'react-loading'

import './modalloading.css'

function ModalLoading({show}) {
    const [open, setOpen] = useState(show);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
	console.log('open :>> ', open);
    return  show ? (
        <Modal open={open} onClose={onCloseModal} showCloseIcon={false} center>
          <h2>transaction en cours</h2>
          <div className="modal-loading">
            <ReactLoading type="spinningBubbles" color='red' height='50%' width='50%' />
          </div>
        </Modal>
	): ( <div></div> )
}


export default ModalLoading
