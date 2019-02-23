import { takeLatest, takeEvery, call, put } from "redux-saga/effects";
import { FETCH_TODOS, DELETE_TODO, ADD_TODO, UPDATE_TODO } from "./types";
import {
  fetchTodosSuccess,
  fetchTodosError,
  deleteTodoSuccess,
  deleteTodoError,
  addTodoSuccess,
  addTodoError,
  updateTodoSuccess,
  updateTodoError
} from "./actions";
import api from "api";

async function fetchTodos() {
  return await api.todos.getAll();
}

function* fetchTodoWorkerSaga() {
  try {
    const { data: todos } = yield call(fetchTodos);
    yield put(fetchTodosSuccess(todos));
  } catch (error) {
    yield put(fetchTodosError(error));
  }
}

async function deleteTodo(id) {
  return await api.todos.delete(id);
}

function* deleteTodoWorkerSaga({ payload: { id } }) {
  try {
    yield call(deleteTodo, id);
    yield put(deleteTodoSuccess(id));
  } catch (error) {
    yield put(deleteTodoError(id, error));
  }
}

async function addTodo(content) {
  return await api.todos.create(content);
}

function* addTodoWorkerSaga({ payload: content }) {
  try {
    const { data: todo } = yield call(addTodo, content);
    console.log("todo", todo);
    yield put(addTodoSuccess(todo));
  } catch (error) {
    yield put(addTodoError(content, error));
  }
}

async function updateTodo(todo) {
  return await api.todos.update(todo);
}

function* updateTodoWorkerSaga({ payload: todo }) {
  try {
    yield call(updateTodo, todo);
    yield put(updateTodoSuccess(todo));
  } catch (error) {
    yield put(updateTodoError(todo.id, error));
  }
}

export default function* todoWatcherSaga() {
  yield takeLatest(FETCH_TODOS, fetchTodoWorkerSaga);
  yield takeEvery(DELETE_TODO, deleteTodoWorkerSaga);
  yield takeEvery(ADD_TODO, addTodoWorkerSaga);
  yield takeEvery(UPDATE_TODO, updateTodoWorkerSaga);
}
