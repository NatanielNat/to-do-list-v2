import { takeEvery,call,put,takeLatest,select,delay } from "redux-saga/effects";
import { fetchExampleTasks, tasksSet } from "../../tasksSlice";
import {getExampleTasks} from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./localStorage";
import { selectTasks } from "../../tasksSlice";

function* fetchExampleTasksHandler() {
    try {
        yield delay(1000)
      const exampleTasks = yield call(getExampleTasks);
      yield put(tasksSet(exampleTasks))
    } catch (error) {
        yield call(alert, " cos poszlo nie tak!");
    }

}

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage,tasks);
}

export function* watchFetchExampleTasks() {
    yield takeLatest(fetchExampleTasks, fetchExampleTasksHandler);
    yield takeEvery("*",saveTasksInLocalStorageHandler);
}