import React from 'react';

import './courseitem.css'

const CourseItem = ({ course }) => {

    return (
        <div className="course">
            <h2>Название Курса: <span>{course.title}</span> </h2>
            <h3>Продолжительность курса: <span>{course.duration}</span> </h3>
        </div>
    );
};

// почитать про axios и понять где его нужно применить

export default CourseItem;

// rsc