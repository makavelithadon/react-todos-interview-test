import styled, { css } from "styled-components";

const StyledSnackbar = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  margin: auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  transition: 0.35s ease-out;
  max-width: 960px;
  @media screen and (min-width: 961px) {
    border-radius: 0 0 4px 4px;
  }
  ${({ placement }) =>
    css`
      ${placement}: 0;
      box-shadow: 0 ${placement === "top" ? 1 : -1}px 7px rgba(0, 0, 0, 0.3);
    `};
  ${({ type }) => {
    let color;
    switch (type) {
      case "success":
        color = "#92e6af";
        break;
      case "danger":
        color = "red";
        break;
      default:
        color = "deeppink";
        break;
    }
    return css`
      color: ${color};
    `;
  }};
  ${({ placement, open }) => {
    // add 10% to ensure the box-shadow is not visible
    const folded = placement === "top" ? "-110%" : "110%";
    return css`
      transform: translateY(${open ? 0 : folded});
    `;
  }};
`;

export default StyledSnackbar;
