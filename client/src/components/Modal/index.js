import React from "react";
import ReactDOM from "react-dom";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { Spring, animated, config } from "react-spring/renderprops";
import styled from "styled-components";
import Backdrop from "./Backdrop";

const StyledModal = styled(animated.div).attrs(({ opacity, y }) => ({
  style: {
    opacity: opacity.interpolate(o => o),
    display: opacity.interpolate(o => (o > 0 ? "block" : "none")),
    visibility: opacity.interpolate(o => (o > 0 ? "visible" : "hidden")),
    transform: y.interpolate(y => `translate(-50%, calc(-50% + ${y}px))`)
  }
}))`
  position: fixed;
  left: 50%;
  top: 50%;
  max-width: 960px;
  padding: 1.4rem 1rem;
  border-radius: 8px;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.15);
  background-color: #fff;
  z-index: 9999999;
  @media screen and (max-width: 640px) {
    width: 90vw;
  }
  @media screen and (min-width: 641px) {
    width: 600px;
  }
`;

export default function Modal({ open, onClose, children, target, ...rest }) {
  const portalBackdrop = ReactDOM.createPortal(
    <Backdrop
      show={!!open}
      onClick={() => {
        onClose && typeof onClose === "function" && onClose();
        // Awaiting merging PR https://github.com/willmcpo/body-scroll-lock/pull/91
        /* enableBodyScroll(); */
      }}
    />,
    target
  );

  return (
    <>
      {portalBackdrop}
      <Spring
        from={{ opacity: 0, y: 20 }}
        to={{ opacity: Number(open), y: open ? 0 : 20 }}
        config={{ ...config.gentle, delay: open ? 250 : 1, clamp: true }}
        native
      >
        {styles => {
          // Awaiting merging PR https://github.com/willmcpo/body-scroll-lock/pull/91
          /* open &&
            (() => {
              disableBodyScroll();
            })(); */
          return (
            children && (
              <StyledModal {...styles} {...rest}>
                {children}
              </StyledModal>
            )
          );
        }}
      </Spring>
    </>
  );
}

Modal.defaultProps = {
  open: false,
  target: document.body
};
