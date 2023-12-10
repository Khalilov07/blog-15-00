import React, { useState } from "react"; // импорт useState
import "./createpost.css";

import { TextField } from "@mui/material";
import { Button } from "@mui/material";

const CreatePost = () => {

    const [title, setTitle] = useState("")
    const [duration, setDuration] = useState(0)

    

  const addPost = (e) => {
    e.preventDefault()
    console.log("Sended");
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={addPost}> 
      {/* onSubmit - он срабатывает лишь при отправке */}
        <h1>CREATE POST FORM</h1>
        <TextField id="standard-basic" label="Title..." variant="standard" value={title} 
        onChange={(e) => setTitle(e.target.value)} />
        {/* e.target.value - данные которые я ввожу в инпут */}
        <TextField id="standard-basic" label="Duration..." variant="standard" value={duration}
            onChange={(e) => setDuration(e.target.value)}
        />
        <Button variant="contained" color="success" type="submit">
          SEND
        </Button>
      </form>
    </div>
  );
};

export default CreatePost;
