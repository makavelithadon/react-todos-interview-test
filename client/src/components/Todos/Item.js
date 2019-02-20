import React from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';

const itemRadius = 8;

const StyledTodo = styled(animated.li).attrs(({ opacity, maxHeight }) => ({
  style: {
    opacity: opacity.interpolate(o => o),
    maxHeight: maxHeight.interpolate(h => h),
  }
}))`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  background-color: ${({ isSelected }) => isSelected ? 'deeppink' : '#fff'};
  color: ${({ isSelected }) => isSelected ? '#fff' : 'deeppink'};;
  &:first-child {
    border-top-left-radius: ${itemRadius}px;
    border-top-right-radius: ${itemRadius}px;
  }
  &:last-child {
    border-bottom-left-radius: ${itemRadius}px;
    border-bottom-right-radius: ${itemRadius}px;
  }
  &:hover {
    background-color: deeppink;
    color: #fff;
  }
`;

const StyledItemContent = styled.div`
  text-decoration: ${({ completed }) => completed ? 'line-through' : 'none'};
  opacity: ${({ completed }) => completed ? 0.35 : 1};
  padding: 1.4rem;
`;

const StyledDate = styled.div`
  position: absolute;
  top: 50%; right: 0;
  padding-right: 1.4rem;
  transform: translateY(-50%);
`;

export default function TodoListItem ({ todo, onSelect, isSelected, style }) {
  return (
    <StyledTodo {...style} onClick={() => onSelect(todo.id)} isSelected={isSelected}><StyledItemContent completed={todo.completed}>{todo.content}<StyledDate>Ajouté le {todo.date}</StyledDate></StyledItemContent></StyledTodo>
  );
}