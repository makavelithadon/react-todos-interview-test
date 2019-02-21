import React, { useState } from "react";
import TodoListItem from "./Item";
import Modal from "components/Modal";
import styled from "styled-components";
import DeleteButton from "containers/DeleteButton";
import TodoDetails from "containers/TodoDetails";
import { useTransition } from "react-spring";

const StyledModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default function TodoList({ todos, selectTodo, selected }) {
  const reverseList = list => [...list].reverse();
  const transitions = useTransition(reverseList(todos), item => item.id, {
    from: { opacity: 0, maxheight: 0 },
    enter: { opacity: 1, maxheight: 200 },
    leave: { opacity: 0, maxheight: 0 },
    onDestroyed: () => selected && hideModal(),
    native: true,
    initial: { opacity: 0, maxheight: 200 }
  });
  const [isModalOPen, setIsModalOpen] = useState(false);
  const showModal = () => setIsModalOpen(true);
  const hideModal = () => {
    setIsModalOpen(false);
    selectTodo(null);
  };
  const modalContent = selected && (
    <StyledModalContent>
      <TodoDetails />
      <DeleteButton />
    </StyledModalContent>
  );
  return (
    <>
      <ul>
        {transitions.map(({ item: todo, props, key }) => (
          <TodoListItem
            key={key}
            todo={todo}
            onSelect={id => {
              selectTodo(id);
              showModal();
            }}
            isSelected={selected === todo.id}
            style={props}
          />
        ))}
      </ul>
      <Modal open={isModalOPen} onClose={hideModal} style={{ minWidth: 480 }}>
        {modalContent}
      </Modal>
    </>
  );
}
