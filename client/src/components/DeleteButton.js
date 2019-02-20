import React from "react";
import styled from "styled-components";
import Button from "components/Button";

const StyledButtonContainer = styled.div`
  text-align: center;
`;

export default function DeleteButton({ handleDeleteTodo, isDeleting, todoId, todos }) {
  const notDeletedYet = todos.find(todo => todo.id === todoId);
  const button = (
    <Button
      readOnly={isDeleting || !notDeletedYet}
      type={"submit"}
      onClick={() => {
        if (!isDeleting && notDeletedYet) handleDeleteTodo(todoId);
      }}
    >
      {notDeletedYet ? "Delete" : "Successfully deleted from DB"}
    </Button>
  );
  return <StyledButtonContainer>{button}</StyledButtonContainer>;
}
