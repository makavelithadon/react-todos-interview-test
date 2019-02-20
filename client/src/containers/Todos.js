import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import TodosList from "components/Todos/List";
import { fetchTodos, selectTodo } from "state/ducks/todos/actions";
import { getTodosItems, getIsLoading, getSelected, getSelectedItem } from "state/ducks/todos/selectors";

const Todos = ({ fetchTodos, selectTodo, selected, selectedItem, isLoading, todos }) => {
  useEffect(() => {
    fetchTodos();
  }, []);
  const hasTodos = todos.length > 0;
  if (isLoading) return "Loading todos, please wait...";
  return !hasTodos ? (
    "You do not have any todo yet."
  ) : (
    <TodosList selected={selected} selectedItem={selectedItem} todos={todos} handleSelectTodo={id => selectTodo(id)} />
  );
};

const mapStateToProps = state => ({
  todos: getTodosItems(state),
  isLoading: getIsLoading(state),
  selected: getSelected(state),
  selectedItem: getSelectedItem(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchTodos,
      selectTodo
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
