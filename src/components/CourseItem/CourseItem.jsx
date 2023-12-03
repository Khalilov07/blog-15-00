import React from 'react';

import './courseitem.css'

const CourseItem = ({ course }) => {

    return (
        <div className="course">
            <h2>Название Курса: <span>{course.name}</span> </h2>
            <h3>Продолжительность курса: <span>{course.duration}</span> </h3>
        </div>
    );
};

export default CourseItem;

// rsc