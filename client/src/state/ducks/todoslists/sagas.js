import { takeLatest, call, put } from "redux-saga/effects";
import { FETCH_TODOS_LISTS } from "./types";
import { fetchTodosListsSuccess, fetchTodosListsError } from "./actions";
import api from "api";

async function fetchTodosLists() {
  return await api.todosLists.getAll();
}

function* fetchTodosListsWorkerSaga() {
  try {
    const { data: todosLists } = yield call(fetchTodosLists);
    yield put(fetchTodosListsSuccess(todosLists));
  } catch (error) {
    yield put(fetchTodosListsError(error));
  }
}

export default function* todosListsWatcherSaga() {
  yield takeLatest(FETCH_TODOS_LISTS, fetchTodosListsWorkerSaga);
}
