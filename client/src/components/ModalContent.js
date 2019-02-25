import React from "react";
import styled from "styled-components";
import DeleteButton from "containers/DeleteButton";
import TodoDetails from "containers/TodoDetails";

const StyledModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default function ModalContent() {
  return (
    <StyledModalContent>
      <TodoDetails />
      <DeleteButton />
    </StyledModalContent>
  );
}
