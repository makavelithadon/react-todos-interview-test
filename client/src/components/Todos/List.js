import React from "react";
import TodoListItem from "./Item";

export default function TodosList({ todos, selectTodo, selected }) {
  const reverseList = list => [...list].reverse();
  /*  const [isModalOPen, setIsModalOpen] = useState(false);
  const showModal = () => setIsModalOpen(true);
  const hideModal = () => {
    setIsModalOpen(false);
    selectTodo(null);
  }; */
  const visibleTodos = reverseList(todos);
  return (
    <>
      <ul style={{ position: "relative" }}>
        {visibleTodos.map(todo => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            onSelect={id => {
              selectTodo(id);
              //showModal();
            }}
            isSelected={selected === todo.id}
          />
        ))}
      </ul>
      {/* <Modal open={isModalOPen} onClose={hideModal}>
        {modalContent}
      </Modal> */}
    </>
  );
}
