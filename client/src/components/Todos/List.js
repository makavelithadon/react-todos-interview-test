import React from "react";
import TodoListItem from "./Item";
import Modal from "components/Modal";
import DeleteButton from "containers/DeleteButton";
import TodoDetails from "./Details";

export default class TodoList extends React.Component {
  state = {
    modalOpen: false
  };
  showModal = () => this.setState({ modalOpen: true });
  hideModal = () => this.setState({ modalOpen: false });
  reverseList = list => [...list].reverse();
  render() {
    const { todos, handleSelectTodo, selected, selectedItem } = this.props;
    const { modalOpen } = this.state;
    const modalContent = selected && (
      <>
        <TodoDetails selected={selected} todo={selectedItem} />
        <DeleteButton todoId={selected} />
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
                handleSelectTodo(id);
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
