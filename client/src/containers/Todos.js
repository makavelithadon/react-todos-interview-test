import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import qs from "query-string";
import { withRouter } from "react-router-dom";
import TodosList from "components/Todos/List";
import { fetchTodos, selectTodo } from "state/ducks/todos/actions";
import { getTodosItems, getIsLoading, getSelected } from "state/ducks/todos/selectors";

const getVisibleTodos = (todos, filter, sort) => {
  let filteredTodos;
  switch (filter) {
    case "bought":
      filteredTodos = todos.filter(todo => todo.completed);
      break;
    case "not-bought":
      filteredTodos = todos.filter(todo => !todo.completed);
      break;
    default:
      filteredTodos = todos;
      break;
  }
  switch (sort) {
    case "alphabetical":
      return filteredTodos.sort((a, b) => b.content.localeCompare(a.content));
    default:
      return filteredTodos;
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
  const { filter, sort } = queries;
  return {
    todos: getVisibleTodos(getTodosItems(state), filter, sort),
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
