import React, { createContext, useContext, useState } from 'react'
import OSlashIcon from '../assets/O_Slash_icon.svg'


const AppContext = createContext();
const AppProvider = ({ children }) => {
    const [selectedPerson, setSelectedPerson] = useState([
        {
            name: "Everyone at OSlash",
            value: "25 workspace members",
            type: "Group",
            img: OSlashIcon,
            permissions: "Full access"
        }
    ])

    const addInvite = (name, value, permissions, type) => {
        const isPresent = selectedPerson.filter((record) =>
            record.name === name && record.value === value && record.type === type
            && { name, value, permissions, type }
        )
        setSelectedPerson((prevState) =>
            isPresent.length === 0 ?
                [...prevState, { name, value, permissions, type }]
                : [...selectedPerson.map((record) =>
                    record.name === name && record.value === value && record.type === type
                        ? { name, value, permissions, type, img: record?.img }
                        : record)])
    }
    return (
        <AppContext.Provider value={{ selectedPerson, addInvite }}>{children}</AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, useGlobalContext, AppContext }