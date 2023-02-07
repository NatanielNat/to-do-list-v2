import "./style.css";
import {useState,useRef} from "react"
import {Button} from "../Buttons/styled";

const Form = ({addNewTask})=>{
const [newTaskContent,setNewTaskContent] = useState("");

const onFormSubmit = (event) => {
  event.preventDefault();
  addNewTask(newTaskContent.trim());
  setNewTaskContent("");
  focusInput();
};

const inputRef = useRef(null);

const focusInput = () => {
  inputRef.current.focus();
};


  return (
    
      <form className="form" onSubmit={onFormSubmit}>
          <input 
          ref={inputRef}
          value={newTaskContent}
          className="js-input" 
          placeholder="to do..." 
          onChange={(event)=> setNewTaskContent(event.target.value)}
          />
          <Button className="js-buttonAdd">Add New Task</Button>
        </form>
  )
}

export default Form;