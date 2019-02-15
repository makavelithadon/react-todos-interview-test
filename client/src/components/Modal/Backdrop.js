import React from 'react';
import styled from 'styled-components';
import { Spring, animated } from 'react-spring/renderprops';

const StyledBackdrop = styled(animated.div).attrs(({ opacity }) => ({
  style: {
    opacity: opacity.interpolate(o => o),
    pointerEvents: opacity.interpolate(o => o > 0 ? 'auto' : 'none'),
    display: opacity.interpolate(o => o > 0 ? 'block' : 'none'),
    visibility: opacity.interpolate(o => o > 0 ? 'visible' : 'hidden'),
  }
}))`
  position: fixed;
  width: 100%; height: 100%;
  left: 0; top: 0; right: 0; bottom: 0;
  z-index: 100;
  background-color: rgba(0,0,0,0.25);
`;

export default function Backdrop ({ show, onClick }) {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: Number(show) }}
      native
    >
      {({ opacity }) => <StyledBackdrop opacity={opacity} onClick={onClick} />}
    </Spring>
  );
}