import React from "react";
import { connect } from "react-redux";
import { addTodo } from "state/ducks/todos/actions";
import { getIsAdding } from "state/ducks/todos/selectors";
import AddTodo from "components/AddTodo";

const mapStateToProps = state => ({
  isAdding: getIsAdding(state)
});

const mapDispatchToProps = dispatch => ({
  addTodo: content => dispatch(addTodo(content))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);
