import React, { useEffect, useState } from "react";
import "./homepage.css";
import CourseItem from "../../components/CourseItem/CourseItem";
import axios from "axios";

// создать новую страницу, назвать её CreatePost.jsx создать в этой странице разметку
// и сделать для неё роут

const getData = () => {
  return axios("http://localhost:3001/courses");
};

const HomePage = () => {
  const [courses, setCourses] = useState([]); // состояние нужно для получение данных с ответа
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    getData().then((res) => setCourses(res.data));
    // promise = {resolve, reject}
  }, []); // пустой массив в виде второго параметра, позволяет выполнить функцию одина раза

  // если состояние ShowALL = true то тогда отображать все элемент в массиве, если false то тогда выполнять
  // фильтрацию

  const filteredCourses = showAll ? courses : courses.filter((course) => course.important == true);

  // json-server --watch db.json --port 3001

  const changeState = () => {
    setShowAll(!showAll); // !true = false, !false = true
  };

  // в случае успешного удаления поста добавлять уведомление так как в createPost
  // добавить кнопку EDIT (редактирование)

  const deletePost = (id) => {
    axios.delete(`http://localhost:3001/courses/${id}`)
      .then(res => {
        
      }) // promise
  }

  // useEffect() - позволяет выполнить какой-то эффект на странице

  // console.log(courses);

  return (
    <div className="wrapper">
      {/* 
        использовать метод перебора массива (map) и отобразить три карточки
        с информацией о курсах
    */}

      <button onClick={changeState}>
        {showAll == true ? "Show Important Course" : "Show All Course"}
      </button>

      <div className="course-wrapper">
        {filteredCourses.map((course) => (
          <CourseItem key={course.id} course={course} deletePost={() => deletePost(course.id)} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

// rsc - стартовая разметка
