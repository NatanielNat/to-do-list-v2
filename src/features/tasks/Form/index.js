import "./style.css";
import { useState, useRef } from "react"
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { Button } from "../Buttons/styled";
import { addTask,fetchExampleTasks } from "../../../tasksSlice";


const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedNewContent = newTaskContent.trim();

    if (!trimmedNewContent) {
      return;
    }

    dispatch(addTask({
      content: trimmedNewContent,
      done: false,
      id: nanoid(),

    }));
    setNewTaskContent("");
    focusInput();
  };

  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };


  return (
<>
    <form className="form" onSubmit={onFormSubmit}>
      <input
        ref={inputRef}
        value={newTaskContent}
        className="js-input"
        placeholder="to do..."
        onChange={(event) => setNewTaskContent(event.target.value)}
      />
      <Button className="js-buttonAdd">Add New Task</Button>
    </form>
     <Button className="second__button" onClick={()=> dispatch(fetchExampleTasks())}>
     Pobierz przykładowe zadania
 </Button>
 </>
  )
}

export default Form;