import Form from "./features/tasks/Form"
import Buttons from "./features/tasks/Buttons"
import TaskList from "./features/tasks/TaskList"
import Header from "../src/common/Header"
import { Clock } from "../src/common/Clock"
import React, { useState, useEffect } from "react"
import { useTasks} from "./useTasks";

function Tasks() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone)
  };

const { 
         tasks,
        removeTask,
        toggleTaskDone,
        setAllDone,
        addNewTask,
        removeAllTasks,

} = useTasks()



  return (
    <>
    <div className="mainBody">
      <Header title="Lista Zadan" />
      <div className="container">
        <Clock />
        <div className="inputs">
          <Form
            addNewTask={addNewTask}
          />
        </div>
        <Buttons
          tasks={tasks}
          hideDone={hideDone}
          toggleHideDone={toggleHideDone}
          setAllDone={setAllDone}
          removeAllTasks={removeAllTasks}
        />
      </div>
      <TaskList tasks={tasks}
        hideDone={hideDone}
        removeTask={removeTask}
        toggleTaskDone={toggleTaskDone} />
        </div>
    </>
  );
}

export default Tasks;
