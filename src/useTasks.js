import {useEffect,useState} from "react";


const getInitialTasks = () => {
    const tasksFromLocal = localStorage.getItem("tasks");

    return  tasksFromLocal
    ? JSON.parse(tasksFromLocal) : [];
};

export const useTasks = () => {
    const [tasks, setTasks] = useState(getInitialTasks);
   
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
      }, [tasks]);

      const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id))
      }


      const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task => {
          if (task.id === id) {
            return { ...task, done: !task.done };
          }
      
          return task;
        }));
      };
      const setAllDone = () => {
        setTasks(tasks => tasks.map(task => ({
          ...task, done: true,
        })));
      }

      const addNewTask = (newTaskContent) => {
        if (newTaskContent === "") {
          return
        }
        else {
          setTasks(tasks => [
            ...tasks,
            {
              content: newTaskContent,
              done: false,
              id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
            },
          ]);
        };
      };
      const removeAllTasks = () => {
        setTasks([])
      }
     

      return {
        tasks,
        removeTask,
        toggleTaskDone,
        setAllDone,
        addNewTask,
        removeAllTasks,
    };
}




  