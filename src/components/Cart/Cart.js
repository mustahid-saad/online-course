import React from 'react';

const Cart = (props) => {
    const count = props.count;
     let totalPrice = 0;
    for (let i = 0; i < count.length; i++) {
        const course = count[i];
        totalPrice = totalPrice + course.price ;
        
    }
    return (
        <div>
            <h4>Course Enroll: {count.length}</h4>
            <h4>Course Selected</h4>
            <ol>
                {
                    count.map(course => <li>{course.name} - ${course.price}</li>)
                }
            </ol>

            <h4>Total: ${totalPrice}</h4>
        </div>
    );
};

export default Cart;