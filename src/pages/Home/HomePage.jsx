import React from "react";
import "./homepage.css";
import CourseItem from "../../components/CourseItem/CourseItem";

const HomePage = () => {
  const courses = [
    {
      id : 1,
      name: "HTML",
      duration: 1,
    },
    {
      id : 2,
      name: "CSS",
      duration: 1,
    },
    {
      id : 3,
      name: "JAVA SCRIPT",
      duration: 2.5,
    },
    {
      id : 4,
      name: "React JS",
      duration: 1.5,
    },
  ];

  return (
    <div className="course-wrapper">
      {/* 
        использовать метод перебора массива (map) и отобразить три карточки
        с информацией о курсах
    */}

      {courses.map((course) => <CourseItem key={course.id} course={course} />)}
        
    </div>
  );
};

export default HomePage;

// rsc - стартовая разметка
