import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { fetchTodosLists } from "state/ducks/todoslists/actions";
import Lists from "components/TodosLists/List";

const TodosLists = ({ fetchTodosLists, todosLists, isLoading, ...rest }) => {
  useEffect(() => {
    fetchTodosLists();
  }, []);
  const hasTodos = todosLists.length > 0;
  if (isLoading) return "Loading todos, please wait...";
  return !hasTodos ? "You do not have any todo-list yet." : <Lists {...rest} todosLists={todosLists} />;
};

const mapStateToProps = state => ({
  todosLists: state.todosLists.items
});

const mapDispatchToProps = dispatch => bindActionCreators({ fetchTodosLists }, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodosLists)
);
