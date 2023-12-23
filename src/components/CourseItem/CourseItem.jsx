import React from "react";

import "./courseitem.css";

const CourseItem = ({ course, deletePost }) => {
  return (
    <div className="course">
      <div className="course__info">
        <h2>
          Название Курса: <span>{course.title}</span>
        </h2>
        <h3>
          Продолжительность курса: <span>{course.duration}</span>
        </h3>
      </div>
      <div className="course__buttons">
        <button onClick={() => deletePost()}>DELETE</button>
      </div>
    </div>
  );
};

// почитать про axios и понять где его нужно применить

export default CourseItem;

// rsc
