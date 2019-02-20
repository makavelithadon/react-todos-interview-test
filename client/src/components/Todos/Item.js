import React from 'react';
import styled from 'styled-components';

const itemRadius = 8;

const StyledTodo = styled.li`
  position: relative;
  cursor: pointer;
  border: 1px solid lightgrey;
  padding: 1.4rem;
  transition: .25s ease-out;
  text-decoration: ${({ completed }) => completed ? 'line-through' : 'none'};
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

const StyledDate = styled.div`
  position: absolute;
  top: 50%; right: 0;
  padding-right: 1.4rem;
  transform: translateY(-50%);
`;

export default function TodoListItem ({ todo, onSelect }) {
  return (
    <StyledTodo onClick={() => onSelect(todo.id)} completed={todo.completed}>{todo.content}<StyledDate>Ajouté le {todo.date}</StyledDate></StyledTodo>
  );
}