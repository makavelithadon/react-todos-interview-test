import { combineReducers } from "redux";
import {
  FETCH_TODOS_LISTS,
  FETCH_TODOS_LISTS_SUCCESS,
  FETCH_TODOS_LISTS_ERROR,
  FETCH_TODOS_LIST,
  FETCH_TODOS_LIST_SUCCESS,
  FETCH_TODOS_LIST_ERROR,
  ADD_TODOS_LIST_SUCCESS,
  DELETE_TODOS_LIST_SUCCESS,
  UPDATE_TODOS_LIST_SUCCESS,
  ADD_TODOS_LIST_ERROR,
  DELETE_TODOS_LIST_ERROR,
  UPDATE_TODOS_LIST_ERROR
} from "./types";

const initialTodosLists = [];

export function todosLists(state = initialTodosLists, action) {
  switch (action.type) {
    case FETCH_TODOS_LISTS_SUCCESS:
      return action.payload;
    case FETCH_TODOS_LIST_SUCCESS:
      return [...state, action.payload];
    case ADD_TODOS_LIST_SUCCESS:
      return [...state, action.payload.todosList];
    case DELETE_TODOS_LIST_SUCCESS:
      return state.filter(list => list.id !== action.payload.id);
    case UPDATE_TODOS_LIST_SUCCESS:
      const { id: listId } = action.payload;
      const index = state.findIndex(({ id }) => id === listId);
      return [...state.slice(0, index), action.payload, ...state.slice(index)];
    default:
      return state;
  }
}

const initialLoading = false;

function isLoading(state = initialLoading, action) {
  switch (action.type) {
    case FETCH_TODOS_LISTS:
    case FETCH_TODOS_LIST:
      return true;
    case FETCH_TODOS_LISTS_SUCCESS:
    case FETCH_TODOS_LIST_SUCCESS:
    case FETCH_TODOS_LISTS_ERROR:
    case FETCH_TODOS_LIST_ERROR:
      return false;
    default:
      return state;
  }
}

const initialError = null;

function error(state = initialError, action) {
  switch (action.type) {
    case FETCH_TODOS_LISTS_SUCCESS:
    case FETCH_TODOS_LIST_SUCCESS:
    case ADD_TODOS_LIST_SUCCESS:
    case DELETE_TODOS_LIST_SUCCESS:
    case UPDATE_TODOS_LIST_SUCCESS:
      return null;
    case FETCH_TODOS_LISTS_ERROR:
    case FETCH_TODOS_LIST_ERROR:
    case ADD_TODOS_LIST_ERROR:
    case DELETE_TODOS_LIST_ERROR:
    case UPDATE_TODOS_LIST_ERROR:
      console.log("action.payload", action.payload);
      return action.payload.error;
    default:
      return state;
  }
}

export default combineReducers({
  items: todosLists,
  isLoading,
  error
});
