import React from "react";
import styled from "styled-components";

const StyledTodoDetails = styled.div`
  color: rgba(0, 0, 0, 0.825);
  padding: 1.4rem;
`;

export default function TodoDetails({ todo }) {
  return <StyledTodoDetails>{todo.content}</StyledTodoDetails>;
}
