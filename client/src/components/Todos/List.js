import React, { useState } from "react";
import TodoListItem from "./Item";
import Modal from "components/Modal";
import DeleteButton from "containers/DeleteButton";
import TodoDetails from "containers/TodoDetails";
import { useTransition, animated } from 'react-spring';

export default function TodoList ({ todos, selectTodo, selected }) {
  const [isModalOPen, setIsModalOpen] = useState(false);
  const showModal = () => setIsModalOpen(true);
  const hideModal = () => {
    setIsModalOpen(false);
    selectTodo(null);
  }
  const reverseList = list => [...list].reverse();
  const modalContent = selected && (
    <>
      <TodoDetails />
      <DeleteButton />
    </>
  );
  const transitions = useTransition(reverseList(todos), item => item.id, {
    from: { opacity: 0, maxHeight: 0 },
    enter: { opacity: 1, maxHeight: 200 },
    leave: { opacity: 0, maxHeight: 0 },
  })
  return (
    <>
      <ul>
        {transitions.map(({ item: todo, props, key }) => <TodoListItem
          key={key}
          todo={todo}
          onSelect={id => {
            selectTodo(id);
            showModal();
          }}
          isSelected={selected === todo.id}
          style={props}
        />)}
      </ul>
      <Modal open={isModalOPen} onClose={hideModal}>
        {modalContent}
      </Modal>
    </>
  );
}
