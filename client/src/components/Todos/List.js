import React from "react";
import styled from "styled-components";
import TodoListItem from "./Item";
import Modal from "components/Modal";
import DeleteButton from "containers/DeleteButton";
import TodoDetails from "./Details";

const StyledTodosList = styled.ul`
  max-width: 960px;
  margin: 40px auto 0 auto;
`;

export default class TodoList extends React.Component {
  state = {
    modalOpen: false,
    selected: null
  };
  hideModal = () => this.setState({ modalOpen: false });
  handleSelectTodo = id => {
    this.setState({ modalOpen: true, selected: this.props.todos.find(todo => todo.id === id) });
  };
  render() {
    const { todos } = this.props;
    const { modalOpen, selected } = this.state;
    const modalContent = selected && (
      <>
        <TodoDetails todo={selected} />
        <DeleteButton todoId={selected.id} onDelete={this.hideModal} />
      </>
    );
    return (
      <>
        <StyledTodosList>
          {[...todos].reverse().map(todo => (
            <TodoListItem key={todo.id} todo={todo} onSelect={this.handleSelectTodo} />
          ))}
        </StyledTodosList>
        <Modal open={modalOpen} onClose={this.hideModal}>
          {modalContent}
        </Modal>
      </>
    );
  }
}
