import React from 'react'
import PersonalSkill from '../components/PersonalSkill'
import { skills } from '../data'

const PersonalSkills = () => {
    return (
        <div className='section-skills' id='skills'>
            <h2>Big three personal skills</h2>
            <div className='skills'>
                {
                    skills.map(skill => (
                        <PersonalSkill key={skill.id} {...skill} />
                    ))
                }
            </div>
        </div>
    )
}

export default PersonalSkills