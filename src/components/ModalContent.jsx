import React, { useState } from 'react'
import Globe from '../assets/Globe_2.svg'
import ButtonIcon from '../assets/Button_icon.svg'
import QuestionMark from '../assets/QuestionMark.svg'

import Dialog from './Dialog'
import InputSelection from './InputSelection'
import ModalActionSection from './ModalActionSection'


const ModalContent = () => {
    const [openDialog, setOpenDialog] = useState(false)

    const copyLink = () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url);
        alert("Copied the text: " + url);
    }

    return (
        <>
            <div>
                <Dialog
                    openClosed={openDialog}
                    setOpenClose={setOpenDialog}
                >
                    <InputSelection />
                </Dialog>

            </div>
            <div className='modal_content_container'>
                <div>
                    {/* madal header */}
                    <div className='modal_header'>
                        <div>
                            <div className='icon_container'>
                                <img src={Globe} alt="O/" />

                            </div>
                            <div className='header_content'>
                                <p>
                                    Share to web
                                </p>
                                <span>
                                    Publish and share link with anyone
                                </span>
                            </div>
                        </div>
                        <div>
                            <img src={ButtonIcon} alt="O/" />
                        </div>
                    </div>
                    {/* modal action */}
                    <ModalActionSection setOpenDialog={setOpenDialog} />
                    {/* modal footer */}
                </div>
                <div className='modal_footer'>
                    <div>
                        <div className='que_icon_container'>
                            <img src={QuestionMark} alt="O/" />
                        </div>
                        <div className='header_content'>
                            <span>
                                learn about sharing
                            </span>
                        </div>
                    </div>

                    <div className='copy_link_container' onClick={() => copyLink()}>
                        <div className='link_icon_container'>
                            <i className="fa-solid fa-link"></i>
                        </div>
                        <span>
                            Copy link
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalContent