

export const saveTasksInLocalStorage = tasks =>
localStorage.setItem("tasks",JSON.stringify(tasks));

export const getTaskFromLocalStorage = () => 
        JSON.parse(localStorage.getItem("tasks")) || [];
    
     
