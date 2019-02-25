import { FETCH_TODOS_LISTS, FETCH_TODOS_LISTS_SUCCESS, FETCH_TODOS_LISTS_ERROR } from "./types";

export const fetchTodosLists = () => ({ type: FETCH_TODOS_LISTS });

export const fetchTodosListsSuccess = payload => ({ type: FETCH_TODOS_LISTS_SUCCESS, payload });

export const fetchTodosListsError = error => ({ type: FETCH_TODOS_LISTS_ERROR, payload: { error } });
