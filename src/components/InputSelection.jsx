import React, { useEffect, useState } from 'react'
import Modal from './Modal'

import OSlashIcon from '../assets/O_Slash_icon.svg'
import QuestionMark from '../assets/QuestionMark.svg'
import AngleDown from '../assets/AngleDown.svg'
import { Button } from '../stories/Button'
import PeopleGroup from './PeopleGroup'
import { access, groups, peoples } from '../Utils/constants'
import NameChips from './NameChips'
import { useGlobalContext } from '../store/Context'


const InputSelection = () => {
    const [accessModalOpen, setAccessModalOpen] = useState(false)
    const [accessSelected, setAccessSelected] = useState("Full access")
    const [inputValue, setInputValue] = useState("")
    const [tags, setTags] = React.useState([]);

    const [state, setState] = useState({
        peoples: peoples,
        groups: groups
    })

    const { addInvite } = useGlobalContext();
    const removeTags = indexToRemove => {
        setTags([...tags.filter((_, index) => index !== indexToRemove)]);
    };

    const addTags = (event, name) => {
        if (event === "clicked") {
            setTags([...tags, name]);
            setInputValue("")
            setState({
                peoples: peoples,
                groups: groups
            })
        } else if (event.target.value !== "") {
            setTags([...tags, event.target.value]);
            setInputValue("")
            setState({
                peoples: peoples,
                groups: groups
            })
        }
    };


    const handleInputChange = (event) => {
        event.preventDefault();
        const value = event.target.value;
        setInputValue(value)
        let groupsFilter = groups.filter((grp) =>
            grp.name.toLowerCase().match(value.toLowerCase()) && grp
        )
        if (value === "") {
            setState({
                peoples: peoples,
                groups: groups
            })
        } else if (groupsFilter.length === 0) {
            let peoplesFilter = state.peoples.filter((ppl) =>
                ppl.name.toLowerCase().includes(value) && ppl
            )
            setState({
                peoples: peoplesFilter.length === 0
                    ? [{ name: value, value: value }]
                    : peoplesFilter,
                groups: []
            })
        } else {
            setState({
                peoples: [],
                groups: groupsFilter
            })
        }
    }

    const handleInvite = () => {
        let groupsFilter = groups.filter((grp) =>
            grp.name.toLowerCase().match(tags[0].toLowerCase()) && grp
        )
        if (groupsFilter.length === 0) {
            addInvite(tags[0], tags[0], accessSelected, "People");
        } else {
            addInvite(groupsFilter[0].name, groupsFilter[0].value, accessSelected, "Group");
        }
        setTags([])
    }
    useEffect(() => {
        setState({
            peoples: peoples,
            groups: groups
        })

        return () => { }
    }, [])

    return (
        <>
            <div className='dialog_main_container'>
                <div className='modal_content_container'>
                    <div>
                        {/* madal header */}
                        <div className='dialog_header'>
                            <div className='input_iSearch_container' >
                                {tags && <NameChips
                                    handleInputChange={handleInputChange}
                                    inputValue={inputValue}
                                    removeTags={removeTags}
                                    tags={tags}
                                    addTags={addTags}
                                />}
                                <div className='access_container' onClick={() => setAccessModalOpen(!accessModalOpen)}>
                                    <span>{accessSelected}</span>
                                    <img src={AngleDown} alt="O/" />
                                    {accessModalOpen &&
                                        <div className='access_list_container'>
                                            {access.map((item, i) =>
                                                <div className='access_item' key={item.value + i} onClick={() => setAccessSelected(item.name)}>
                                                    <span style={{ color: item.value === "No access" ? "red" : "inherit" }}>
                                                        {item.name}
                                                    </span>
                                                </div>)}
                                        </div>}
                                </div>
                                <Button backgroundColor="white"
                                    disabled={tags.length === 0}
                                    color="black" onClick={() => handleInvite()}>Invite</Button>
                            </div>
                        </div>
                        {/* modal action */}
                        <div className='modal_action__center'>
                            <PeopleGroup
                                peoples={state.peoples}
                                groups={state.groups}
                                tags={tags}
                                addTags={(e, name) => addTags(e, name)}
                            />
                        </div>
                        {/* modal footer */}
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InputSelection