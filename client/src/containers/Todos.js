import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import qs from "query-string";
import { withRouter } from "react-router-dom";
import TodosList from "components/Todos/List";
import { fetchTodos, selectTodo } from "state/ducks/todos/actions";
import { getTodosItems, getIsLoading, getSelected } from "state/ducks/todos/selectors";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "completed":
      return todos.filter(todo => todo.completed);
    case "active":
      return todos.filter(todo => !todo.completed);
    default:
      return todos;
  }
};

const Todos = ({ fetchTodos, todos, isLoading, ...rest }) => {
  useEffect(() => {
    fetchTodos();
  }, []);
  const hasTodos = todos.length > 0;
  if (isLoading) return "Loading todos, please wait...";
  return !hasTodos ? "You do not have any todo yet." : <TodosList {...rest} todos={todos} />;
};

const mapStateToProps = (state, ownProps) => {
  const queries = qs.parse(ownProps.location.search);
  const { filter } = queries;
  return {
    todos: getVisibleTodos(getTodosItems(state), filter),
    isLoading: getIsLoading(state),
    selected: getSelected(state)
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchTodos,
      selectTodo
    },
    dispatch
  );

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Todos)
);
