import * as types from '../constants/actionTypes';

export const openModal = (type, props) => ({
  type: types.OPEN_MODAL,
  payload: {
    type,
    props
  }
});

export const closeModal = () => ({
  type: types.CLOSE_MODAL
});
