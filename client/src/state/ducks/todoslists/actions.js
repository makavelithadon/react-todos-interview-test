import {
  FETCH_TODOS_LISTS,
  FETCH_TODOS_LISTS_SUCCESS,
  FETCH_TODOS_LISTS_ERROR,
  FETCH_TODOS_LIST,
  FETCH_TODOS_LIST_SUCCESS,
  FETCH_TODOS_LIST_ERROR
} from "./types";

export const fetchTodosLists = () => ({ type: FETCH_TODOS_LISTS });

export const fetchTodosListsSuccess = payload => ({ type: FETCH_TODOS_LISTS_SUCCESS, payload });

export const fetchTodosListsError = error => ({ type: FETCH_TODOS_LISTS_ERROR, payload: { error } });

export const fetchTodosList = id => ({ type: FETCH_TODOS_LIST, payload: { id } });

export const fetchTodosListSuccess = todosList => ({ type: FETCH_TODOS_LIST_SUCCESS, payload: todosList });

export const fetchTodosListError = error => ({ type: FETCH_TODOS_LIST_ERROR, payload: { error } });
