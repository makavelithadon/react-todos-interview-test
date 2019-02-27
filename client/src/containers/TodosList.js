import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { getTodosList, getIsLoading, getError } from "../state/ducks/todoslists/selectors";
import { fetchTodosList } from "../state/ducks/todoslists/actions";
import TodosList from "views/TodosList";

class ConnectedTodosList extends React.Component {
  componentDidMount() {
    const {
      todosList,
      fetchTodosList,
      match: {
        params: { id: todosListId }
      }
    } = this.props;
    if (!todosList) fetchTodosList(todosListId);
  }
  render() {
    const { todosList, isLoading, error, match } = this.props;
    if (isLoading) return "Loading todosList, please wait...";
    if (error) return <p>{error.message}</p>;
    return todosList ? <TodosList todosList={todosList} /> : `Aucune todo-list ayant la référence ${match.params.id}`;
  }
}

const mapStateToProps = (state, ownProps) => ({
  todosList: getTodosList(state, ownProps.match.params.id),
  isLoading: getIsLoading(state),
  error: getError(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({ fetchTodosList }, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ConnectedTodosList)
);
