import React, { useEffect, useState } from "react";
import "./homepage.css";
import CourseItem from "../../components/CourseItem/CourseItem";
import axios from "axios";

// создать новую страницу, назвать её CreatePost.jsx создать в этой странице разметку
// и сделать для неё роут

const getData = () => {
  return axios("http://localhost:3001/courses")
}

const HomePage = () => {

  const [courses, setCourses] = useState([]); // состояние нужно для получение данных с ответа

  useEffect(() => {
    getData()
      .then((res) => setCourses(res.data))
    // promise = {resolve, reject}
  }, []); // пустой массив в виде второго параметра, позволяет выполнить функцию одина раза

  console.log(courses);

  // useEffect() - позволяет выполнить какой-то эффект на странице

  // console.log(courses);

  return (
    <div className="course-wrapper">
      {/* 
        использовать метод перебора массива (map) и отобразить три карточки
        с информацией о курсах
    */}

      {courses.map((course) => (
        <CourseItem key={course.id} course={course} />
      ))}
    </div>
  );
};

export default HomePage;

// rsc - стартовая разметка
