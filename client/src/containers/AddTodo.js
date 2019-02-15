import React from 'react'
import { connect } from 'react-redux';
import { addTodo } from 'state/ducks/todos/actions';
import { getIsAdding } from 'state/ducks/todos/selectors';
import AddTodoComponent from 'components/AddTodo';

function AddTodo ({ addTodo, isAdding }) {
  return <AddTodoComponent readonly={isAdding} addTodo={content => {
    if (content.trim()) addTodo(content);
  }} />;
}

const mapStateToProps = state => ({
  isAdding: getIsAdding(state),
})

const mapDispatchToProps = dispatch => ({
  addTodo: content => dispatch(addTodo(content))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);