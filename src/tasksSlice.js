import { createSlice, } from "@reduxjs/toolkit";
import { getTaskFromLocalStorage } from "./features/tasks/localStorage"

const tasksSlice = createSlice({
    name: `tasks`,
    initialState: {
        tasks: getTaskFromLocalStorage(),
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload);
            state.tasks[index].done = !state.tasks[index].done;
        },
        removeTask: ({ tasks }, { payload:taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks.splice(index, 1)
        },
        setAllDone: ({ tasks }) => {
            for (const task of tasks) {
                task.done = true;
            }
        },
        removeAllTasks: ({ tasks }) => {
            tasks = tasks.length = 0
        },
        tasksSet: (state, { payload: tasks }) => {
            state.tasks = tasks;
        },

    }
});

export const selectTasks = state => state.tasks;
export const { addTask, toggleHideDone, toggleTaskDone, tasksSet, removeTask, fetchExampleTasks, setAllDone, removeAllTasks } = tasksSlice.actions;


export const getTaskById = (state, taskId) =>
    selectTasks(state).find(({ id }) => id === taskId)

export default tasksSlice.reducer;
