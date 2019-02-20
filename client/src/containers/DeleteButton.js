import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import DeleteButton from "components/DeleteButton";
import { deleteTodo } from "state/ducks/todos/actions";
import { getTodosItems, getIsDeleting, getSelectedItem } from "state/ducks/todos/selectors";

const mapStateToProps = state => {
  const selectedItem = getSelectedItem(state);
  return {
    todos: getTodosItems(state),
    isDeleting: getIsDeleting(state),
    todoId: selectedItem ? selectedItem.id : null
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteTodo
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteButton);
