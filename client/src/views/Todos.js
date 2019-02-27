import React, { useState } from "react";
import styled from "styled-components";
import Todos from "components/Todos/List";
import AddTodo from "containers/AddTodo";
import Modal from "containers/Modal";
import Filters from "components/Filters";
import Snackbar from "components/Snackbar";

const TodoContainer = styled.div`
  max-width: 960px;
  padding: 80px 20px;
  margin: 0 auto;
`;

export default function TodosPage({ todos, ...rest }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  return (
    <TodoContainer>
      <AddTodo />
      <Filters />
      <Todos todos={todos} {...rest} />
      <Modal />
      <Snackbar open={open} type="success" onClose={() => setOpen(false)}>
        Bonbons a été ajouté à votre todo-list
      </Snackbar>
      <button onClick={toggle}>Toggle Snackbar</button>
    </TodoContainer>
  );
}
