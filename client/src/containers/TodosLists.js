import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { fetchTodosLists } from "state/ducks/todoslists/actions";
import { getTodosListsItems, getIsLoading } from "state/ducks/todoslists/selectors";
import TodosLists from "components/TodosLists/List";

class ConnectedTodosLists extends React.Component {
  componentDidMount() {
    this.props.fetchTodosLists();
  }
  render() {
    const { fetchTodosLists, todosLists, isLoading, ...rest } = this.props;
    const hasTodosLists = todosLists.length > 0;
    if (isLoading) return "Loading todosLists, please wait...";
    return !hasTodosLists ? "You do not have any todo-list yet." : <TodosLists {...rest} todosLists={todosLists} />;
  }
}

const mapStateToProps = state => ({
  todosLists: getTodosListsItems(state),
  isLoading: getIsLoading(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({ fetchTodosLists }, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ConnectedTodosLists)
);
