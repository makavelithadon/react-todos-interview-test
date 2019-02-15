import React from 'react';
import styled from 'styled-components';

const itemRadius = 8;

const StyledTodo = styled.li`
  cursor: pointer;
  border: 1px solid lightgrey;
  padding: 1.4rem;
  transition: .25s ease-out;
  &:first-child {
    border-top-left-radius: ${itemRadius}px;
    border-top-right-radius: ${itemRadius}px;
  }
  &:last-child {
    border-bottom-left-radius: ${itemRadius}px;
    border-bottom-right-radius: ${itemRadius}px;
  }
  &:hover {
    box-shadow: 0 1px 8px rgba(0,0,0,0.2);
  }
`;

export default function TodoListItem ({ todo, onSelect }) {
  return (
    <StyledTodo onClick={() => onSelect(todo.id)}>{todo.content}</StyledTodo>
  );
}