import React, { useState } from "react"; // импорт useState
import axios from "axios";

import "./createpost.css";

import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Snackbar } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CreatePost = () => {
  const [title, setTitle] = useState(""); // setTitle - это функция которая позволяет изменить состояние
  const [duration, setDuration] = useState(0); // состояние
  const [open, setOpen] = useState(false); // отображает нам уведомление
  const navigate = useNavigate();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const toHome = () =>
    setTimeout(() => {
      navigate("/");
    }, 1000);

  const addPost = (e) => {
    e.preventDefault(); // это нужно для отмены обновления страницы

    const newData = {
      // это наши новые данные, которые нужно отправить
      title,
      duration,
    };

    axios
      .post("http://localhost:3001/courses", newData) // promise
      .then((res) => {
        setTitle("");
        setDuration(0);
        setOpen(true);
        toHome();
      }); // обработка promise
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={addPost}>
        {/* onSubmit - он срабатывает лишь при отправке */}
        <h1>CREATE POST FORM</h1>
        <TextField
          id="standard-basic"
          label="Title..."
          variant="standard"
          value={title}
          onChange={(event) => setTitle(event.target.value)} // onChange() - вызывает событие, это событие мы можем получить
        />
        {/* e.target.value - данные которые я ввожу в инпут */}
        <TextField
          id="standard-basic"
          label="Duration..."
          variant="standard"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <Button variant="contained" color="success" type="submit">
          SEND
        </Button>
      </form>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          This is post sended!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CreatePost;
