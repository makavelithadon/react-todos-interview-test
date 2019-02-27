import { takeLatest, call, put } from "redux-saga/effects";
import { FETCH_TODOS_LISTS, FETCH_TODOS_LIST } from "./types";
import { fetchTodosListsSuccess, fetchTodosListsError, fetchTodosListSuccess, fetchTodosListError } from "./actions";
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

async function fetchTodosList(id) {
  return await api.todosLists.findById(id);
}

function* fetchTodosListWorkerSaga({ payload: { id } }) {
  try {
    const { code, data: todosList, message } = yield call(fetchTodosList, id);
    if (code === 404) {
      yield put(fetchTodosListError({ code, message }));
    } else {
      yield put(fetchTodosListSuccess(todosList));
    }
  } catch (error) {
    console.log("here from error saga");
    yield put(fetchTodosListError(error));
  }
}

export default function* todosListsWatcherSaga() {
  yield takeLatest(FETCH_TODOS_LISTS, fetchTodosListsWorkerSaga);
  yield takeLatest(FETCH_TODOS_LIST, fetchTodosListWorkerSaga);
}
