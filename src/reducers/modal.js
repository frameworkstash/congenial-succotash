import { OPEN_MODAL, CLOSE_MODAL } from '../constants/actionTypes';

const initialState = {
  open: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        open: !state.open
      };
    case CLOSE_MODAL:
      return {
        ...state,
        open: !state.open
      };
    default:
      return state;
  }
};
