import { combineReducers } from "redux";
import {
  FETCH_TODOS_LISTS,
  FETCH_TODOS_LISTS_SUCCESS,
  ADD_TODOS_LIST,
  ADD_TODOS_LIST_SUCCESS,
  DELETE_TODOS_LIST,
  DELETE_TODOS_LIST_SUCCESS,
  UPDATE_TODOS_LIST,
  UPDATE_TODOS_LIST_SUCCESS
} from "./types";
import { isLoading as isLoadingReducer, error as errorReducer } from "state/ducks/shared/reducers";

const initialTodosLists = [];

export function todosLists(state = initialTodosLists, action) {
  switch (action.type) {
    case FETCH_TODOS_LISTS_SUCCESS:
      return action.payload;
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

const isLoading = isLoadingReducer(undefined, FETCH_TODOS_LISTS);

const error = errorReducer(undefined, [FETCH_TODOS_LISTS, ADD_TODOS_LIST, DELETE_TODOS_LIST, UPDATE_TODOS_LIST]);

export default combineReducers({
  items: todosLists,
  isLoading,
  error
});
