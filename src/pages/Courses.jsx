import React from 'react'
import Course from '../components/Course'
import { courses } from '../data'

const Courses = () => {
    return (
        <div id='courses'>
            <h2>My courses</h2>
            <div>
                {
                    courses.map(course => {
                        return <Course {...course} key={course.id} />
                    })
                }
            </div>

            <p>Hundreds of hours of Youtube tutorials and Google researches...</p>
        </div>
    )
}

export default Courses