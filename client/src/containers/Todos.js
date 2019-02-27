import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import qs from "query-string";
import { withRouter } from "react-router-dom";
import Todos from "views/Todos";
import { fetchTodos, selectTodo } from "state/ducks/todos/actions";
import { getTodosByTodosLIst, getTodosItems, getIsLoading, getSelected, getError } from "state/ducks/todos/selectors";

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

class ConnectedTodos extends React.Component {
  componentDidMount() {
    const { fetchTodos, match } = this.props;
    fetchTodos(match.params.id);
  }
  render() {
    const { fetchTodos, todos, isLoading, error, match, ...rest } = this.props;
    const hasTodos = todos.length > 0;
    if (isLoading) return "Loading todos, please wait...";
    return !hasTodos ? "You do not have any todo yet." : <Todos todos={todos} {...rest} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  const queries = qs.parse(ownProps.location.search);
  const { filter, sort } = queries;
  const todos = getVisibleTodos(getTodosByTodosLIst(state, ownProps.match.params.id), filter, sort);
  return {
    todos,
    isLoading: getIsLoading(state),
    error: getError(state),
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
  )(ConnectedTodos)
);
