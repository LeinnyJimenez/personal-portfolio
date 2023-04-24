import React from 'react'

import inProgress from '../assets/inProgress.jpg'

const Course = ({ img, title, instructor, completed, technologies, link }) => {
    return (
        <a href={link} target="_blank">
            <div className='course' >

                <img src={completed ? img : inProgress} alt={title} />
                <div className='content'>
                    <h4>{title}</h4>
                    {
                        technologies.map((tech, index) => {

                            if (index < technologies.length - 1) {
                                return <span key={tech}>{tech}  |  </span>
                            }
                            if (index = technologies.length) {
                                return <span key={tech}>{tech}</span>
                            }
                        })
                    }
                    <div className='instructor'>
                        <p>{instructor.name}</p>
                        <img src={instructor.img} alt={instructor.name} />
                    </div>
                </div>

            </div>
        </a>
    )
}

export default Course