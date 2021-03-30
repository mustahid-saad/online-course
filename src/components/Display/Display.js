import React, { useEffect, useState } from 'react';
import course from '../../data/Course.json'
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
import './Display.css'

const Display = () => {
    const [courses, setCourses] = useState([]);
    const [count, setCount] = useState([]);
    useEffect(()=>{
        setCourses(course)
    }, [])
    function handleAddCourse(course){
        const newCount = [...count,course];
        setCount(newCount);
    }
    return (
        <div className="display-area">
            <div className="course-list">
                <h2 className="course-heading">Available Course </h2>
                {
                    courses.map(course => <Course course={course} handleAddCourse={handleAddCourse}></Course>)
                }
            </div>
            <div >
                <h2>Cart list</h2>
                <Cart count={count}></Cart>
            </div>
        </div>
    );
};

export default Display;