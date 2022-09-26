import React, { useState } from 'react'
import { Button } from '../stories/Button'
import '../styles/Home.css'
import Modal from './Modal'
import ModalContent from './ModalContent'
import ShareIcon from '../assets/VectorShare.svg'

const Home = () => {
  const [toDisplay, setToDisplay] = useState(false)
  const [buttonPosition, setButtonPosition] = useState("top_left")
  return (
    <>
      <div className='home_container'>
        <span>Click on Share button</span>
        <div className={`main_button_container ${buttonPosition}`}>
          <Button backgroundColor="black" size={"large"} onClick={() => setToDisplay(!toDisplay)}>
            Share <img src={ShareIcon} alt="share" className='share_icon' />
          </Button>
          {toDisplay && <Modal position={`${buttonPosition}_modal`}>
            <ModalContent />
          </Modal>
          }</div>
      </div>
      <div className='buttons__container' >
        <Button backgroundColor="black" onClick={() => setButtonPosition("top_left")} >Top Left</Button>
        <Button backgroundColor="black" onClick={() => setButtonPosition("top_right")} >Top Right</Button>
        <Button backgroundColor="black" onClick={() => setButtonPosition("bottom_right")} >Bottom Right</Button>
        <Button backgroundColor="black" onClick={() => setButtonPosition("bottom_left")} >Bottom left</Button>
      </div>
    </>
  )
}

export default Home