import { createSelector } from "reselect";

export const getTodosLIsts = state => state.todosLists;

export const getTodosListsItems = createSelector(
  getTodosLIsts,
  todosLists => todosLists.items
);

export const getTodosList = (state, id) => {
  const todosLists = getTodosListsItems(state);
  if (!todosLists.length) return undefined;
  return todosLists.find(todosList => parseInt(todosList.id) === parseInt(id));
};

export const getIsLoading = createSelector(
  getTodosLIsts,
  todosLists => todosLists.isLoading
);

export const getError = createSelector(
  getTodosLIsts,
  todos => todos.error
);
