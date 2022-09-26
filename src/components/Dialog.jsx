import React from 'react'
import { createPortal } from 'react-dom'
import '../styles/Dialog.css'

const Dialog = (props) => {
    const { openClosed, setOpenClose, children } = props
    return createPortal(
        <>
            {openClosed && <div className='dialog_container' >
                <div
                    className="modal_overlay_container"
                    onClick={() => setOpenClose(false)}
                />
                <div className="dialog">

                    {children}
                </div>
            </div>}
        </>,
        document.getElementById("dialog")
    )
}

export default Dialog