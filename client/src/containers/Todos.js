import React, { useEffect } from "react";
import { connect } from "react-redux";
import TodosList from "components/Todos/List";
import { fetchTodos } from "state/ducks/todos/actions";
import { getTodosItems, getIsLoading } from "state/ducks/todos/selectors";

const Todos = ({ fetchTodos, isLoading, todos }) => {
  useEffect(() => {
    fetchTodos();
  }, []);
  const hasTodos = todos.length > 0;
  if (isLoading) return "Loading todos, please wait...";
  return !hasTodos ? "You do not have any todo yet." : <TodosList todos={todos} />;
};

const mapStateToProps = state => ({
  todos: getTodosItems(state),
  isLoading: getIsLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(fetchTodos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
