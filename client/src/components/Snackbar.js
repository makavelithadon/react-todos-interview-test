import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import useTimeout from "hooks/useTimeout";
import Snackbar from "UI/Snackbar";

export default function SimpleSnackbar({ type, timeout, open, onClose, target, ...rest }) {
  const [isOpen, setIsOpen] = useState(false);
  if (open !== isOpen) setIsOpen(open);
  const ref = useRef(null);
  const close = () => {
    typeof onClose === "function" && onClose();
    setIsOpen(false);
  };
  const handleClickOutside = e => {
    if (isOpen && !e.target.contains(ref.current)) close();
  };
  const { start, clear } = useTimeout(close, timeout);
  useEffect(() => {
    isOpen && start();
    !isOpen && clear();
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
      clear();
    };
  }, [open]);
  return createPortal(<Snackbar ref={ref} type={type ? type : "info"} open={isOpen} {...rest} />, target);
}

SimpleSnackbar.defaultProps = {
  open: false,
  placement: "top",
  target: document.body,
  onClose: () => console.log("close"),
  timeout: 6000
};

SimpleSnackbar.propTypes = {
  open: PropTypes.bool.isRequired,
  placement: PropTypes.string,
  target: PropTypes.instanceOf(Element),
  onClose: PropTypes.func,
  timeout: PropTypes.number
};
