import { takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import { FETCH_TODOS, DELETE_TODO, ADD_TODO } from "./types";
import {
  fetchTodosSuccess,
  fetchTodosError,
  deleteTodoSuccess,
  deleteTodoError,
  addTodoSuccess,
  addTodoError,
} from './actions';
import api from 'api';
//import { delay } from 'utils';

async function fetchTodos () {
  return await api.todos.getAll();
}

function* fetchTodoWorkerSaga () {
  try {
    const { data: { data: todos } } = yield call(fetchTodos);
    yield put(fetchTodosSuccess(todos));
  } catch (error) {
    yield put(fetchTodosError(error));
  }
}

async function deleteTodo (id) {
  //await delay(5000);
  return await api.todos.delete(id);
}

function* deleteTodoWorkerSaga ({ payload: { id } }) {
  try {
    const { data: { data: todos } } = yield call(deleteTodo, id);
    yield put(deleteTodoSuccess(id));
  } catch (error) {
    yield put(deleteTodoError(id, error))
  }
}

async function addTodo (content) {
  return await api.todos.create(content);
}

function* addTodoWorkerSaga ({ payload: content }) {
  console.log('content', content);
  
  try {
    const { data: { data: todo } } = yield call(addTodo, content);
    yield put(addTodoSuccess(todo));
  } catch (error) {
    yield put(addTodoError(content, error));
  }
}

export default function* todoWatcherSaga () {
  yield takeLatest(FETCH_TODOS, fetchTodoWorkerSaga);
  yield takeLatest(DELETE_TODO, deleteTodoWorkerSaga);
  yield takeEvery(ADD_TODO, addTodoWorkerSaga)
}