import React from 'react'
import '../styles/Modal.css'

const Modal = ({ children, position }) => {
  return (
    <div className={`modal_main_container ${position}`}>
      {children}
    </div>
  )
}

export default Modal