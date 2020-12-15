import React from 'react'

import Course from './components/Course'


const App = (props) => {

    return (
        <div>
            <h1>
                Curriculum
            </h1>
            {props.courses.map(course => <Course key={course.id} course={course} />)}
        </div>
    )
}

export default App