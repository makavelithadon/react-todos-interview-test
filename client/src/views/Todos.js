import React from "react";
import styled from "styled-components";
import Todos from "containers/Todos";
import AddTodo from "containers/AddTodo";
import Filters from "components/Filters";

const TodoContainer = styled.div`
  max-width: 960px;
  padding: 40px 20px;
  margin: 0 auto 40px auto;
`;

export default function TodosPage() {
  return (
    <TodoContainer>
      <AddTodo />
      <Filters />
      <Todos />
    </TodoContainer>
  );
}
