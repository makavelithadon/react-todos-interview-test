import React from "react";
import styled from "styled-components";

const StyledTodoDetails = styled.div`
  position: relative;
  color: rgba(0, 0, 0, 0.825);
  padding: 1.4rem 4rem 1.4rem 1.4rem;
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  color: deeppink;
  cursor: pointer;
`;

const StyledDate = styled.div`
  padding-left: 1.4rem;
  font-size: 0.75rem;
`;

function TodoDetails({ todo, updateTodo, isUpdating }) {
  return (
    !!todo && (
      <div>
        <StyledDate>Ajouté le {todo.date}</StyledDate>
        <StyledTodoDetails
          completed={todo.completed}
          onClick={() => !isUpdating && updateTodo({ ...todo, completed: !todo.completed })}
        >
          {todo.content}
        </StyledTodoDetails>
      </div>
    )
  );
}

export default TodoDetails;
