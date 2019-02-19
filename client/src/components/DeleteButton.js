import React from "react";
import styled from "styled-components";

const StyledButtonContainer = styled.div`
  text-align: center;
`;

const StyledButton = styled.button`
  padding: 10px 16px;
  border-radius: 4px;
  border: none;
  outline: 0;
  outline-offset: 0;
  cursor: pointer;
`;

export default function DeleteButton({ handleDeleteTodo, isDeleting, todoId, todos }) {
  return (
    <StyledButtonContainer>
      <StyledButton
        onClick={() => {
          if (!isDeleting && todos.find(todo => todo.id === todoId)) handleDeleteTodo(todoId);
        }}
      >
        Delete todo
      </StyledButton>
    </StyledButtonContainer>
  );
}
