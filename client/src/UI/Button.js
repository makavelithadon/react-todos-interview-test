import styled from "styled-components";

const StyledButton = styled.button.attrs(({ type }) => ({
  type: type || "button"
}))`
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0);
  outline: 0;
  outline-offset: 0;
  cursor: pointer;
  padding: 0.7rem 1.5rem;
  &[readonly],
  &[disabled] {
    opacity: 0.5;
    cursor: initial;
  }
  &:hover {
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  }
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#fff")};
  border: ${({ rounded }) => (rounded ? "1px solid deeppink" : "none")};
  color: ${({ color }) => (color ? color : "deeppink")};
  &:hover {
    background-color: deeppink;
    color: #fff;
  }
  &[disabled]:hover,
  &[readonly]:hover {
    background-color: ${({ bgColor }) => (bgColor ? bgColor : "#fff")};
    color: ${({ color }) => (color ? color : "deeppink")};
  }
  transition: 0.3s ease-out;
`;

export default StyledButton;
