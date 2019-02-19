import React from "react";
import { connect } from "react-redux";
import DeleteButton from "components/DeleteButton";
import { deleteTodo } from "state/ducks/todos/actions";
import { getTodosItems, getIsDeleting } from "state/ducks/todos/selectors";

const mapStateToProps = state => ({
  todos: getTodosItems(state),
  isDeleting: getIsDeleting(state)
});

const mapDispatchToProps = dispatch => ({
  handleDeleteTodo: id => dispatch(deleteTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteButton);
