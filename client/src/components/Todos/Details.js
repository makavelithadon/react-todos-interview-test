import React from "react";
import styled from "styled-components";

const StyledTodoDetails = styled.div`
  position: relative;
  color: rgba(0, 0, 0, 0.825);
  padding: 1.4rem 4rem 1.4rem 1.4rem;
  text-decoration: ${({ completed }) => completed ? 'line-through' : 'none'};
`;

const StyledDate = styled.div`
  padding-right: 1.4rem;
`;

function TodoDetails({ todo, updateTodo, isUpdating }) {
  return !!todo && (
    <StyledTodoDetails
      completed={todo.completed}
      onClick={() => !isUpdating && updateTodo({ ...todo, completed: !todo.completed })}
    >{todo.content}<StyledDate>Ajouté le {todo.date}</StyledDate></StyledTodoDetails>
  );
}

export default TodoDetails;
