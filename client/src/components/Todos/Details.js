import React from "react";
import styled from "styled-components";

const StyledTodoDetails = styled.div`
  color: rgba(0, 0, 0, 0.825);
  padding: 1.4rem;
  text-decoration: ${({ completed }) => completed ? 'line-through' : 'none'};
`;

function TodoDetails({ todo, updateTodo, isUpdating }) {
  return <StyledTodoDetails completed={todo && todo.completed} onClick={() => !isUpdating && updateTodo({ ...todo, completed: !todo.completed })}>{todo && todo.content}</StyledTodoDetails>;
}

export default TodoDetails;
