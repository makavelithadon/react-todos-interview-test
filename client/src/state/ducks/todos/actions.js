import {
  FETCH_TODOS,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_ERROR,
  DELETE_TODO,
  DELETE_TODO_SUCESS,
  DELETE_TODO_ERROR,
  ADD_TODO,
  ADD_TODO_SUCCESS,
  ADD_TODO_ERROR,
  SELECT_TODO
} from "./types";

export const fetchTodos = () => ({ type: FETCH_TODOS });

export const fetchTodosSuccess = payload => ({ type: FETCH_TODOS_SUCCESS, payload });

export const fetchTodosError = error => ({ type: FETCH_TODOS_ERROR, payload: { error } });

export const deleteTodo = todoId => ({ type: DELETE_TODO, payload: { id: todoId } });

export const deleteTodoSuccess = todoId => ({ type: DELETE_TODO_SUCESS, payload: { id: todoId } });

export const deleteTodoError = (todoId, error) => ({ type: DELETE_TODO_ERROR, payload: { id: todoId, error } });

export const addTodo = content => ({ type: ADD_TODO, payload: content });

export const addTodoSuccess = todo => ({ type: ADD_TODO_SUCCESS, payload: todo });

export const addTodoError = (content, error) => ({ type: ADD_TODO_ERROR, payload: { content, error } });

export const selectTodo = todoId => ({ type: SELECT_TODO, payload: todoId });
