import styled from "styled-components";

const StyledInput = styled.input.attrs(({ type }) => ({
  type: type || "text"
}))`
  padding: 0.7rem;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0);
  outline: 0;
  outline-offset: 0;
  &:focus {
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  }
`;

export default StyledInput;
