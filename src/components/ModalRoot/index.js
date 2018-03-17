import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Modal } from 'semantic-ui-react';
import { closeModal } from '../../actions/modalAction';
import { modalUnloaded } from '../../actions/modalAction';

class ModalRoot extends Component {
  render() {
    const { size } = this.props || '';
    return (
      <Modal
        size={size}
        dimmer="blurring"
        open={this.props.open}
        onClose={() => {
          this.props.closeModal();
          this.props.modalUnloaded();
        }}
      >
        {this.props.children}
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  open: state.modal.open
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      closeModal,
      modalUnloaded
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ModalRoot);
