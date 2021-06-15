import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ReactLoading from 'react-loading'

function Test() {
  const [open, setOpen] = useState(true);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div>
      <Modal open={open} onClose={onCloseModal} showCloseIcon={false} center>
        <ReactLoading type="spinningBubbles" color='red' height='50%' width='50%' />
        <h2>Simple centered modal</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
          hendrerit risus, sed porttitor quam.
        </p>
      </Modal>
    </div>
  )
}

const spinner=()=>(
  <div>
  </div>
)

export default Test


/*
blank
balls
bars
bubbles
cubes
cylon
spin
spinningBubbles
spokes
*/