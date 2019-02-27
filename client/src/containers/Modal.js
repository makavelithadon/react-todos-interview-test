import React from "react";
import { connect } from "react-redux";
import { getSelected } from "state/ducks/todos/selectors";
import { unSelectTodo } from "state/ducks/todos/actions";
import Modal from "components/Modal";
import ModalContent from "components/ModalContent";

const mapStateToProps = state => {
  const selected = getSelected(state);
  return {
    open: !!selected,
    children: selected && <ModalContent />
  };
};

const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch(unSelectTodo())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
