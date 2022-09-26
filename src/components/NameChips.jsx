import React, { forwardRef } from 'react'
import '../styles/NameChips.css'

const NameChips = forwardRef((props, inputRef) => {
    const { tags, inputValue, handleInputChange, addTags, removeTags } = props;
    return (
        <div className="tags-input">
            <ul id="tags">
                {tags.map((tag, index) => (
                    <li key={index} className="tag">
                        <span className='tag-title'>{tag}</span>
                        <button autoFocus className='tag-close-icon'
                            onClick={() => removeTags(index)}
                        >
                            x
                        </button>
                    </li>
                ))}
            </ul>
            {tags.length === 0 && <input type={"text"}
                autoFocus
                placeholder="Search emails, names or groups"
                ref={inputRef}
                value={inputValue}
                onChange={(event) => handleInputChange(event)}
                onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
            />}

        </div>
    )
})

export default NameChips