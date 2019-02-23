import React from "react";
import styled from "styled-components";
import { animated } from "react-spring/renderprops";

const itemRadius = 8;

const StyledTodo = styled(animated.li).attrs(({ opacity, height }) => ({
  style: {
    opacity: opacity.interpolate(o => o),
    height: height.interpolate(h => h)
  }
}))`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  background-color: ${({ isselected }) => (isselected === "true" ? "#e13fa7" : "#fff")};
  &:first-child {
    border-top-left-radius: ${itemRadius}px;
    border-top-right-radius: ${itemRadius}px;
  }
  &:last-child {
    border-bottom-left-radius: ${itemRadius}px;
    border-bottom-right-radius: ${itemRadius}px;
  }
  &:hover {
    background-color: #e13fa7;
  }
  transition: 0.3s ease-out;
  will-change: height, opacity;
`;

const StyledItemContent = styled.div`
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  opacity: ${({ completed }) => (completed ? 0.35 : 1)};
  padding: 1.4rem 16rem 1.4rem 1.4rem;
  color: ${({ isselected }) => (isselected === "true" ? "#fff" : "#e13fa7")};
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
  font-size: 0.85rem;
  ${StyledTodo}:hover & {
    color: #fff;
  }
`;

function TodoListItem({ todo, onSelect, isSelected, style, innerRef }) {
  return (
    <StyledTodo {...style} onClick={() => onSelect(todo.id)} isselected={String(isSelected)} ref={innerRef}>
      <StyledItemContent isselected={String(isSelected)} completed={todo.completed}>
        {todo.content}
        <StyledDate isselected={String(isSelected)}>Ajouté le {todo.date}</StyledDate>
      </StyledItemContent>
    </StyledTodo>
  );
}

export default React.forwardRef((props, ref) => <TodoListItem innerRef={ref} {...props} />);
