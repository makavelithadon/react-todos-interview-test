import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import TodosList from "components/Todos/List";
import { fetchTodos, selectTodo } from "state/ducks/todos/actions";
import { getTodosItems, getIsLoading, getSelected } from "state/ducks/todos/selectors";

const Todos = ({ fetchTodos, todos, isLoading, ...rest }) => {
  useEffect(() => {
    fetchTodos();
  }, []);
  const hasTodos = todos.length > 0;
  if (isLoading) return "Loading todos, please wait...";
  return !hasTodos ? (
    "You do not have any todo yet."
  ) : (
    <TodosList {...rest} todos={todos} />
  );
};

const mapStateToProps = state => ({
  todos: getTodosItems(state),
  isLoading: getIsLoading(state),
  selected: getSelected(state),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchTodos,
      selectTodo,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
