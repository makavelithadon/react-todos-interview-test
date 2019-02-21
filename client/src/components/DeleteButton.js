import React from "react";
import styled from "styled-components";
import Button from "components/Button";

const StyledButtonContainer = styled.div`
  text-align: center;
`;

const StyledDeleted = styled.div`
  color: #00bf72;
`;

export default function DeleteButton({ deleteTodo, isDeleting, todoId, todos }) {
  const notDeletedYet = todos.find(todo => todo.id === todoId);
  const button = (
    <Button
      readOnly={isDeleting || !notDeletedYet}
      type={"submit"}
      onClick={() => {
        if (!isDeleting && notDeletedYet) deleteTodo(todoId);
      }}
    >
      Delete
    </Button>
  );
  return (
    <StyledButtonContainer>
      {notDeletedYet ? button : <StyledDeleted>Successfully deleted from DB</StyledDeleted>}
    </StyledButtonContainer>
  );
}
