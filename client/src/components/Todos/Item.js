import React from "react";
import styled from "styled-components";
import { LightenDarkenColor } from "style-utils";

const pinkBase = "#e13fa7";
const pink = LightenDarkenColor(pinkBase, 60);

const itemRadius = 8;

const StyledTodo = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  background-color: ${({ isselected }) => (isselected === "true" ? pinkBase : "#fff")};
  &:first-child {
    border-top-left-radius: ${itemRadius}px;
    border-top-right-radius: ${itemRadius}px;
    border-top: 1px solid ${pink};
  }
  &:last-child {
    border-bottom-left-radius: ${itemRadius}px;
    border-bottom-right-radius: ${itemRadius}px;
  }
  &:hover {
    background-color: ${pinkBase};
  }
  border-bottom: 1px solid ${pink};
  border-left: 1px solid ${pink};
  border-right: 1px solid ${pink};
  transition: background-color 0.175s ease-out;
`;

const StyledItemContent = styled.div`
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  opacity: ${({ completed }) => (completed ? 0.35 : 1)};
  padding: 1rem 16rem 1rem 1.8rem;
  color: ${({ isselected }) => (isselected === "true" ? "#fff" : pink)};
  font-size: 0.9rem;
  ${StyledTodo}:hover & {
    color: #fff;
  }
`;

const StyledDate = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  padding-right: 1.4rem;
  transform: translateY(-50%);
  color: ${({ isselected }) => (isselected === "true" ? "#fff" : "rgba(0, 0, 0, 0.75)")};
  font-size: 0.75rem;
  ${StyledTodo}:hover & {
    color: #fff;
  }
`;

export default function TodoListItem({ todo, onSelect, isSelected }) {
  return (
    <StyledTodo onClick={() => onSelect(todo.id)} isselected={String(isSelected)}>
      <StyledItemContent isselected={String(isSelected)} completed={todo.completed}>
        {todo.content}
        <StyledDate isselected={String(isSelected)}>Ajouté le {todo.date}</StyledDate>
      </StyledItemContent>
    </StyledTodo>
  );
}
