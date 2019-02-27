import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { bindActionCreators } from "redux";
import DeleteButton from "components/DeleteButton";
import { deleteTodo } from "state/ducks/todos/actions";
import { getTodosByTodosLIst, getIsDeleting, getSelectedItem } from "state/ducks/todos/selectors";

const mapStateToProps = (state, ownProps) => {
  const selectedItem = getSelectedItem(state);
  return {
    todos: getTodosByTodosLIst(state, ownProps.match.params.id),
    isDeleting: getIsDeleting(state),
    todoId: selectedItem ? selectedItem.id : null
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      deleteTodo
    },
    dispatch
  );

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DeleteButton)
);
