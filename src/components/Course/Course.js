import React from 'react';
import './Course.css'

const Course = (props) => {
    const course = props.course;
    const handleAddCourse = props.handleAddCourse;
    return (
        <div className="course-content">
            <h2>{course.name}</h2>
            <p><small>Course Instructor: {course.instructor}</small></p>
            <h4>${course.price}</h4>
            <button onClick={()=>handleAddCourse(course)}>Enroll Now</button>
            
        </div>
    );
};

export default Course;