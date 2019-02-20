import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TodoDetails from 'components/Todos/Details';
import { getSelectedItem, getIsUpdating } from "state/ducks/todos/selectors";
import { updateTodo } from "state/ducks/todos/actions";

const mapStateToProps = state => ({
  todo: getSelectedItem(state),
  isUpdating: getIsUpdating(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({ updateTodo }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoDetails);