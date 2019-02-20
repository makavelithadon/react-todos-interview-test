import { createSelector } from "reselect";

const getTodos = state => state.todos;

export const getTodosItems = createSelector(
  getTodos,
  todos => todos.items
);

export const getIsLoading = createSelector(
  getTodos,
  todos => todos.isLoading
);

export const getIsDeleting = createSelector(
  getTodos,
  todos => todos.isDeleting
);

export const getIsAdding = createSelector(
  getTodos,
  todos => todos.isAdding
);

export const getSelected = createSelector(
  getTodos,
  todos => todos.selected
);

export const getSelectedItem = createSelector(
  getTodos,
  getTodosItems,
  (todos, items) => items.find(item => item.id === todos.selected)
);
