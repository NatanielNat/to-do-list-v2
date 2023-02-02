import Form from "./Form"
import Buttons from "./Buttons"
import Tasks from "./Tasks"
import Header from "./Header"
import { Clock } from "./Clock"
import React, { useState, useEffect } from "react"
import { useTasks} from "./useTasks";

function App() {
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
      <Tasks tasks={tasks}
        hideDone={hideDone}
        removeTask={removeTask}
        toggleTaskDone={toggleTaskDone} />
    </>
  );
}

export default App;
