import React from 'react'

const Course = ({ img, title, instructor, completed, technologies }) => {
    return (
        <div className='course'>
            <img src={completed ? img : img} alt={title} />
            <div className='content'>
                <h4>{title}</h4>
            </div>
        </div>
    )
}

export default Course