import styled from "styled-components";

const StyledButton = styled.button.attrs(({ type }) => ({
  type: type || "button"
}))`
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0);
  outline: 0;
  outline-offset: 0;
  cursor: pointer;
  padding: 0.7rem;
  &:focus {
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  }
  &[readonly] {
    opacity: 0.5;
    cursor: initial;
  }
`;

export default StyledButton;
