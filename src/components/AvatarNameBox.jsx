import React from 'react'

const AvatarNameBox = ({ avatar, type, addTags }) => {
    const { name, img: profile, value } = avatar

    const nameToLetter = (nameOfPerson) => {
        return nameOfPerson?.split(" ")[0].charAt(0)
    }
    return (
        <div>
            <div className='profile_container' onClick={() => addTags("clicked", name)}>
                {profile ? <img src={profile} /> : <span className={type === "group" ? 'image_replacement type__group' : 'image_replacement'}>{nameToLetter(name)}</span>}
                <span className='avatar_name'>
                    {name}
                </span>
            </div>
        </div>
    )
}

export default AvatarNameBox
