import {
  FETCH_TODOS,
  FETCH_TODOS_ERROR,
  FETCH_TODOS_SUCCESS,
  DELETE_TODO,
  DELETE_TODO_SUCESS,
  DELETE_TODO_ERROR,
  ADD_TODO,
  ADD_TODO_SUCCESS,
  ADD_TODO_ERROR
} from './types';
import { combineReducers } from "redux";

const initialItems = [];

export function items (state = initialItems, action) {
  switch (action.type) {
    case FETCH_TODOS_SUCCESS:
      return action.payload;
    case DELETE_TODO_SUCESS:
      return state.filter(todo => todo.id !== action.payload.id);
    case ADD_TODO_SUCCESS:
      return [ ...state, action.payload ];
    default:
      return state;
  }
}

const initialIsLoading = false;

export function isLoading (state = initialIsLoading, action) {
  switch (action.type) {
    case FETCH_TODOS_ERROR:
    case FETCH_TODOS_SUCCESS:
      return false;
    case FETCH_TODOS:
      return true;
    default:
      return state;
  }
}

const initialIsDeleting = false;

export function isDeleting (state = initialIsDeleting, action) {
  switch (action.type) {
    case DELETE_TODO:
      return true;
    case DELETE_TODO_SUCESS:
    case DELETE_TODO_ERROR:
      return false;
    default:
      return state;
  }
}

const initialIsAdding = false;

export function isAdding (state = initialIsAdding, action) {
  switch (action.type) {
    case ADD_TODO:
      return true;
    default:
      return state;
  }
}

const initialError = false;

export function error (state = initialError, action) {
  switch (action.type) {
    case FETCH_TODOS_SUCCESS:
    case DELETE_TODO_SUCESS:
    case ADD_TODO_SUCCESS:
      return null;
    case DELETE_TODO_ERROR:
    case ADD_TODO_ERROR:
    case FETCH_TODOS_ERROR:
      return action.payload.error;
    default:
      return state;
  }
}

export default combineReducers({
  items,
  isLoading,
  isDeleting,
  isAdding,
  error,
});