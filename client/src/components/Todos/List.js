import React from "react";
import TodoListItem from "./Item";
import Modal from "components/Modal";
import DeleteButton from "containers/DeleteButton";
import TodoDetails from "containers/TodoDetails";

export default class TodoList extends React.Component {
  state = {
    modalOpen: false
  };
  showModal = () => this.setState({ modalOpen: true });
  hideModal = () => this.setState({ modalOpen: false });
  reverseList = list => [...list].reverse();
  render() {
    const { todos, selectTodo, selected } = this.props;
    const { modalOpen } = this.state;
    const modalContent = selected && (
      <>
        <TodoDetails />
        <DeleteButton />
      </>
    );
    return (
      <>
        <ul>
          {this.reverseList(todos).map(todo => (
            <TodoListItem
              key={todo.id}
              todo={todo}
              onSelect={id => {
                selectTodo(id);
                this.showModal();
              }}
            />
          ))}
        </ul>
        <Modal open={modalOpen} onClose={this.hideModal}>
          {modalContent}
        </Modal>
      </>
    );
  }
}
