import React, { useState } from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
const PopUp = ({ permition ,Toggle}) => {

  const [show, setShow] = useState(permition);

  const handleClose = () => Toggle(false);
  const handleShow = () => setShow(true);
  console.log("per" , permition)

  return (
    <>
      <Modal open={show} onClose={handleClose} center>
        <div className='p-2' >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto magnam amet maxime voluptas! Ad maiores quasi cupiditate harum sint? Nulla sunt hic similique mollitia? Ab quia doloremque culpa assumenda explicabo!
        </div>
      </Modal>
    </>
  )
}

export default PopUp