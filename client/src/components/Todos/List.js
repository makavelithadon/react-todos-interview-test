import React, { useState } from "react";
import TodoListItem from "./Item";
import Modal from "components/Modal";
import styled from "styled-components";
import DeleteButton from "containers/DeleteButton";
import TodoDetails from "containers/TodoDetails";
import { Transition } from "react-spring/renderprops";

const StyledModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default function TodoList({ todos, selectTodo, selected }) {
  const reverseList = list => [...list].reverse();
  const [isModalOPen, setIsModalOpen] = useState(false);
  const showModal = () => setIsModalOpen(true);
  const hideModal = () => {
    setIsModalOpen(false);
    selectTodo(null);
  };
  console.log("render");
  const modalContent = selected && (
    <StyledModalContent>
      <TodoDetails />
      <DeleteButton />
    </StyledModalContent>
  );
  const visibleTodos = reverseList(todos);
  return (
    <>
      <ul>
        <Transition
          items={visibleTodos}
          keys={item => item.id}
          from={{ opacity: 0, height: 0 }}
          enter={{ opacity: 1, height: 80 }}
          leave={{ opacity: 0, height: 0 }}
          onDestroyed={() => selected && hideModal()}
          initial={{ opacity: 0, height: 80 }}
          native
        >
          {todo => props => (
            <TodoListItem
              key={todo.id}
              todo={todo}
              onSelect={id => {
                selectTodo(id);
                showModal();
              }}
              isSelected={selected === todo.id}
              style={props}
            />
          )}
        </Transition>
      </ul>
      <Modal open={isModalOPen} onClose={hideModal} style={{ minWidth: 480 }}>
        {modalContent}
      </Modal>
    </>
  );
}
