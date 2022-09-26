import React, { useState } from 'react'
import AngleDown from '../assets/AngleDown.svg'
import { useGlobalContext } from '../store/Context'
import { access } from '../Utils/constants'

const dropDownStyles = {
    top: "25px",
    left: "-110px"
}

const ModalActionSection = (props) => {
    const { setOpenDialog } = props

    const [accessModalOpen, setAccessModalOpen] = useState({ "Everyone at OSlash": false })
    const { selectedPerson, addInvite } = useGlobalContext()

    const nameToLetter = (nameOfPerson) => {
        return nameOfPerson?.split(" ")[0].charAt(0)
    }
    const handleAccessChange = (person, permissions) => {
        const { name, value, type } = person
        addInvite(name, value, permissions, type)
        setAccessModalOpen({
            ...accessModalOpen,
            [name]: false
        })
    }
    const handleInputClick = () => {
        setOpenDialog(true);
    }
    const handleModalOpen = (person, isOpen) => {
        setAccessModalOpen({ ...accessModalOpen, ...{ [person.name]: isOpen } })
    }
    return (

        <div className='modal_action__center'>
            <div className='input_invite_container' onClick={() => handleInputClick()}>
                <input type="text" placeholder="People, emails, groups" autoFocus={true} />
                <button>Invite</button>
            </div>
            <div id='empty_div' />

            {selectedPerson.map((person, i) => <div className='work_space_container' key={person.name + i}>
                <div>
                    <div className='icon_container'>
                        {person.img ? <img src={person.img} alt="O/" /> : <span>{nameToLetter(person.name)}</span>}
                    </div>
                    <div className='header_content'>
                        <p>
                            {person.name}
                        </p>
                        <span>
                            {person.value}
                        </span>
                    </div>
                </div>
                <div className='arrow_container' onClick={() => handleModalOpen(person, accessModalOpen[person.name] === undefined ? true : !accessModalOpen[person.name])}>
                    <span>
                        {person.permissions}
                    </span>
                    <div className='arrow_icon_container'>
                        <img src={AngleDown} alt="O/" />
                    </div>
                    {(accessModalOpen[person.name]) &&
                        <div className='home_page access_list_container' style={dropDownStyles}>
                            {access.map((item, i) =>
                                <div className='access_item' key={item.value + i} onClick={() => handleAccessChange(person, item.name)}>
                                    <span style={{ color: item.value === "No access" ? "red" : "inherit" }}>
                                        {item.name}
                                    </span>
                                </div>)}
                        </div>}
                </div>
            </div>)}



        </div>
    )
}

export default ModalActionSection