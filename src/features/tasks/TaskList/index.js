import "./style.css";
import {Button} from "./styled";
import {useSelector,useDispatch} from "react-redux";
import {selectTasks,toggleTaskDone,removeTask} from "../../../tasksSlice";
import { Link } from "react-router-dom";


const TaskList = () => {

  const {tasks,hideDone} = useSelector(selectTasks);
  const dispatch = useDispatch();

  

  return (
    <ul className="js-taskList">
    {tasks.map(task=>(
        <li
        key={task.id} 
        className={`li__item ${task.done && hideDone ? " tasksItemHiddenStyle" : ""}`}
        ><button
        onClick={() => dispatch(toggleTaskDone(task.id))}
         className="button__list js-done">
           ✔ </button>
        <span className={`${task.done ? " task__done" : ""}`}><Link to={`/zadania/${task.id}`}>{task.content}</Link></span>
        <Button 
        remove
        onClick = {() => dispatch(removeTask(task.id))}
        > 
        🗑️ 
        </Button></li>
    ))}
        </ul>
  );
}


export default TaskList;