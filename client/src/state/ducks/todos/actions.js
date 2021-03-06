import {
  FETCH_TODOS,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_ERROR,
  DELETE_TODO,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_ERROR,
  ADD_TODO,
  ADD_TODO_SUCCESS,
  ADD_TODO_ERROR,
  SELECT_TODO,
  UNSELECT_TODO,
  UPDATE_TODO,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_ERROR
} from "./types";

export const fetchTodos = todosListId => ({ type: FETCH_TODOS, payload: { todosListId } });

export const fetchTodosSuccess = payload => ({ type: FETCH_TODOS_SUCCESS, payload });

export const fetchTodosError = error => ({ type: FETCH_TODOS_ERROR, payload: { error } });

export const deleteTodo = todoId => ({ type: DELETE_TODO, payload: { id: todoId } });

export const deleteTodoSuccess = todoId => ({ type: DELETE_TODO_SUCCESS, payload: { id: todoId } });

export const deleteTodoError = (todoId, error) => ({ type: DELETE_TODO_ERROR, payload: { id: todoId, error } });

export const addTodo = (content, todosListId) => ({ type: ADD_TODO, payload: { content, todosListId } });

export const addTodoSuccess = todo => ({ type: ADD_TODO_SUCCESS, payload: todo });

export const addTodoError = (content, error) => ({ type: ADD_TODO_ERROR, payload: { content, error } });

export const selectTodo = todoId => ({ type: SELECT_TODO, payload: todoId });

export const unSelectTodo = () => ({ type: UNSELECT_TODO });

export const updateTodo = todo => ({ type: UPDATE_TODO, payload: todo });

export const updateTodoSuccess = todo => ({ type: UPDATE_TODO_SUCCESS, payload: todo });

export const updateTodoError = (todoId, error) => ({ type: UPDATE_TODO_ERROR, payload: { todoId, error } });
