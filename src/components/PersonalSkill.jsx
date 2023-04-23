import React from 'react'

const PersonalSkill = ({ img, title, description }) => {
    return (
        <div className='skill'>
            <img src={img} alt={title} className='skill-img' />
            <div className='content'>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default PersonalSkill