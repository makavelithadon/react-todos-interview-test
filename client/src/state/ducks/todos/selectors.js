import { createSelector } from "reselect";

const getTodos = state => {
  return state.todos;
};

export const getTodosItems = state => getTodos(state).items.byIds;

export const getTodosByTodosLIst = (state, todosListId) =>
  Object.values(getTodosItems(state)).filter(todo => parseInt(todo.todosList) === parseInt(todosListId));

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

export const getIsUpdating = createSelector(
  getTodos,
  todos => todos.isUpdating
);

export const getSelected = createSelector(
  getTodos,
  todos => todos.selected
);

export const getSelectedItem = createSelector(
  getTodos,
  getTodosItems,
  (todos, items) => Object.values(items).find(item => item.id === todos.selected)
);

export const getError = createSelector(
  getTodos,
  todos => todos.error
);
