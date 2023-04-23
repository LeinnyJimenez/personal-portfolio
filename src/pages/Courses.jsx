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
        </div>
    )
}

export default Courses