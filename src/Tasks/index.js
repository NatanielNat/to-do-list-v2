import "./style.css";
import {Button} from "./styled";


const Tasks = ({tasks,hideDone,removeTask,toggleTaskDone}) => (
    <ul className="js-taskList">
    {tasks.map(task=>(
        <li
        key={task.id} 
        className={`li__item ${task.done && hideDone ? " tasksItemHiddenStyle" : ""}`}
        ><button
        onClick={() => toggleTaskDone(task.id)}
         className="button__list js-done">
           ✔ </button>
        <span className={`${task.done ? " task__done" : ""}`}>{task.content}</span>
        <Button 
        remove
        onClick = {() => removeTask(task.id)}
        > 
        🗑️ 
        </Button></li>
    ))}
        </ul>
  );


export default Tasks;