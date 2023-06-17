import Form from "./features/tasks/Form"
import Buttons from "./features/tasks/Buttons"
import TaskList from "./features/tasks/TaskList"
import Header from "../src/common/Header"
import { Clock } from "../src/common/Clock"
import React from "react"


function Tasks() {

return (
  <>
    <div className="mainBody">
      <Header title="Lista Zadan" />
      <div className="container">
        <Clock />
        <div className="inputs">
          <Form
          />
        </div>
        <Buttons
        />
      </div>
      <TaskList/>
    </div>
  </>
);
}

export default Tasks;
