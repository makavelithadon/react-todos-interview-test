import React, { memo } from "react";
import styled from "styled-components";

const StyledTodoDetails = styled.div`
  color: rgba(0, 0, 0, 0.825);
  padding: 1.4rem;
`;

function TodoDetails({ todo }) {
  return <StyledTodoDetails>{todo.content}</StyledTodoDetails>;
}

const areEqual = (prevProps, nextProps) => nextProps.selected === prevProps.selected;

export default memo(TodoDetails, areEqual);
