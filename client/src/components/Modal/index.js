import React from 'react';
import ReactDOM from 'react-dom';
import { Spring, animated, config } from 'react-spring/renderprops';
import styled from 'styled-components';
import Backdrop from './Backdrop';

const StyledModal = styled(animated.div).attrs(({ opacity, y }) => ({
  style: {
    opacity: opacity.interpolate(o => o),
    display: opacity.interpolate(o => o > 0 ? 'block' : 'none'),
    visibility: opacity.interpolate(o => o > 0 ? 'visible' : 'hidden'),
    transform: y.interpolate(y => `translate(-50%, calc(-50% + ${y}px))`)
  }
}))`
  position: fixed;
  left: 50%; top: 50%;
  max-width: 960px;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 1px 7px rgba(0,0,0,0.15);
  background-color: #fff;
  z-index: 9999999;
`;

export default function Modal ({ open, onClose, children }) {
  const portalBackdrop = ReactDOM.createPortal(<Backdrop show={!!open} onClick={() => onClose()} />, document.body);
  return (
    <>
      {portalBackdrop}
      <Spring
        from={{ opacity: 0, y: 30 }}
        to={{ opacity: Number(open), y: open ? 0 : 30 }}
        config={{ ...config.gentle, delay: open ? 300 : 1, clamp: true }}
        native
      >
        {styles => <StyledModal {...styles}>{children}</StyledModal>}
      </Spring>
    </>
  );
}

Modal.defaultProps = {
  open: false,
}
