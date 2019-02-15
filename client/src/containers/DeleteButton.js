import React from 'react'
import { connect } from 'react-redux';
import DeleteButtonComponent from 'components/DeleteButton';
import { deleteTodo } from 'state/ducks/todos/actions';
import { getTodosItems, getIsDeleting } from 'state/ducks/todos/selectors';
import Todos from './Todos';

function DeleteButton ({ todos, todoId, onDelete, isDeleting, handleDeleteTodo }) {
  return <DeleteButtonComponent disabled={isDeleting} onClick={() => {
    if (!isDeleting && todos.find(todo => todo.id === todoId)) handleDeleteTodo(todoId);
  }} />
}

const mapStateToProps = state => ({
  todos: getTodosItems(state),
  isDeleting: getIsDeleting(state),
})

const mapDispatchToProps = dispatch => ({
  handleDeleteTodo: id => dispatch(deleteTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteButton);