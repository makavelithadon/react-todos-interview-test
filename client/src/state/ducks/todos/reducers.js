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
import { combineReducers } from "redux";

const initialAllIds = [];

export function allIds(state = initialAllIds, action) {
  switch (action.type) {
    case FETCH_TODOS_SUCCESS:
      return action.payload.map(todo => todo.id);
    case DELETE_TODO_SUCCESS:
      return state.filter(todoId => todoId !== action.payload.id);
    case ADD_TODO_SUCCESS:
      return [...state, action.payload.id];
    default:
      return state;
  }
}

const initialByIds = {};

export function byIds(state = initialByIds, action) {
  switch (action.type) {
    case FETCH_TODOS_SUCCESS:
      return { ...state, ...action.payload.reduce((obj, todo) => ({ ...obj, [todo.id]: todo }), {}) };
    case DELETE_TODO_SUCCESS:
      const clonedState = { ...state };
      const { id } = action.payload;
      delete clonedState[id];
      return clonedState;
    case ADD_TODO_SUCCESS:
    case UPDATE_TODO_SUCCESS:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
}

const initialLoading = false;

function isLoading(state = initialLoading, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return true;
    case FETCH_TODOS_SUCCESS:
    case FETCH_TODOS_ERROR:
      return false;
    default:
      return state;
  }
}

const initialError = null;

function error(state = initialError, action) {
  switch (action.type) {
    case FETCH_TODOS_SUCCESS:
    case ADD_TODO_SUCCESS:
    case DELETE_TODO_SUCCESS:
    case UPDATE_TODO_SUCCESS:
      return null;
    case FETCH_TODOS_ERROR:
    case ADD_TODO_ERROR:
    case DELETE_TODO_ERROR:
    case UPDATE_TODO_ERROR:
      return action.payload.error;
    default:
      return state;
  }
}

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
    case UNSELECT_TODO:
      return null;
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
  items: combineReducers({
    allIds,
    byIds
  }),
  isLoading,
  isDeleting,
  isAdding,
  isUpdating,
  selected,
  error
});

/*


Idea for new shape

{
  byTodosListId: {
    1: { ... },
    2: { ... }
  }
}

{
  todosLists: {
    byIds: {
      1: {
        ...
      },
      2: {
        ...
      },
      3: {

      }
    },
    allIds: [1, 2, 3]
  },
  todos: {
    byIds: {
      1: {
        ...
      },
      2: {
        ...
      },
      3: {
        
      }
    },
    allIds: [1, 2, 3]
  }
}
{

}

*/
