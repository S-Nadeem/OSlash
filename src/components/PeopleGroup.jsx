import React, { useEffect, useState } from 'react'
import AvatarNameBox from './AvatarNameBox'

const PeopleGroup = ({ peoples, groups, tags, addTags }) => {

    const [state, setState] = useState({
        peoples, groups
    })
    useEffect(() => {
        if (tags.length !== 0) {
            let groupsFilter = groups.filter((grp) => grp.name.toLowerCase().includes(tags[0]) && grp)
            if (groupsFilter.length === 0) {
                setState({
                    peoples: [{ name: tags[0], value: tags[0] }],
                    groups: []
                })
            } else {
                setState({
                    peoples: [],
                    groups: groupsFilter
                })
            }
        } else {
            setState({
                peoples, groups
            })
        }

        return () => { }
    }, [peoples, groups, tags])

    return (
        <>
            <div className='Avatars_container'>
                {state.peoples.length !== 0 && <div className='peoples_container'>
                    <span>Select a person</span>
                    {state.peoples.map((person, i) => (
                        <AvatarNameBox avatar={person} key={person + i} type="person" addTags={(e, name) => addTags(e, name)} />
                    ))}
                </div>}
                {state.groups.length !== 0 && <div className='groups_container'>
                    <span>Select a group</span>
                    {state.groups.map((group, i) => (
                        <div key={i}>
                            <AvatarNameBox avatar={group} key={group + i} type="group" addTags={(e, name) => addTags(e, name)} />
                        </div>
                    ))}
                </div>}
            </div>
        </>
    )
}

export default PeopleGroup