import React from 'react';
import { connect } from 'react-redux';
import LogIn from '../Modals/LogIn';
import Post from '../Modals/Post';
import { MODAL_TYPE_LOGIN, MODAL_TYPE_POST } from '../../constants/modalTypes';

const MODAL_COMPONENTS = {
  [MODAL_TYPE_LOGIN]: LogIn,
  [MODAL_TYPE_POST]: Post
};

const ModalRoot = props => {
  if (!props.type) {
    return null;
  }

  const ModalComponent = MODAL_COMPONENTS[props.type];
  return <ModalComponent {...props} />;
};

const mapStateToProps = state => ({
  type: state.modal.type,
  props: state.modal.props
});

export default connect(mapStateToProps)(ModalRoot);
