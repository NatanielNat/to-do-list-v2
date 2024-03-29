import tasksReducer from "./tasksSlice";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import rootSaga from "./rootSaga";


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: {
		tasks: tasksReducer,
		},
		middleware: [sagaMiddleware],
	});

	sagaMiddleware.run(rootSaga);


    export default store;


