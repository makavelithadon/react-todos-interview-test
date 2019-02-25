import {
  FETCH_TODOS,
  FETCH_TODOS_ERROR,
  FETCH_TODOS_SUCCESS,
  DELETE_TODO,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_ERROR,
  ADD_TODO,
  ADD_TODO_SUCCESS,
  ADD_TODO_ERROR,
  SELECT_TODO,
  UPDATE_TODO,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_ERROR
} from "./types";
import * as sharedReducers from "state/ducks/shared/reducers";
import { combineReducers } from "redux";

const initialItems = [];

export function todos(state = initialItems, action) {
  switch (action.type) {
    case FETCH_TODOS_SUCCESS:
      return action.payload;
    case DELETE_TODO_SUCCESS:
      return state.filter(todo => todo.id !== action.payload.id);
    case ADD_TODO_SUCCESS:
      return [...state, action.payload];
    case UPDATE_TODO_SUCCESS:
      const index = state.findIndex(item => item.id === action.payload.id);
      return [...state.slice(0, index), action.payload, ...state.slice(index + 1)];
    default:
      return state;
  }
}

const isLoading = sharedReducers.isLoading(undefined, FETCH_TODOS);

const error = sharedReducers.error(undefined, [FETCH_TODOS, ADD_TODO, DELETE_TODO, UPDATE_TODO]);

const initialIsDeleting = false;

export function isDeleting(state = initialIsDeleting, action) {
  switch (action.type) {
    case DELETE_TODO:
      return true;
    case DELETE_TODO_SUCCESS:
    case DELETE_TODO_ERROR:
      return false;
    default:
      return state;
  }
}

const initialIsAdding = false;

export function isAdding(state = initialIsAdding, action) {
  switch (action.type) {
    case ADD_TODO:
      return true;
    case ADD_TODO_SUCCESS:
    case ADD_TODO_ERROR:
      return false;
    default:
      return state;
  }
}

const initialSelected = null;

export function selected(state = initialSelected, action) {
  switch (action.type) {
    case SELECT_TODO:
      return action.payload;
    default:
      return state;
  }
}

const initialIsUpdating = false;

export function isUpdating(state = initialIsUpdating, action) {
  switch (action.type) {
    case UPDATE_TODO:
      return true;
    case UPDATE_TODO_SUCCESS:
    case UPDATE_TODO_ERROR:
      return false;
    default:
      return state;
  }
}

export default combineReducers({
  items: todos,
  isLoading,
  isDeleting,
  isAdding,
  isUpdating,
  selected,
  error
});
