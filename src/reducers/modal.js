import { OPEN_MODAL, CLOSE_MODAL } from '../constants/actionTypes';

const initialState = {
  open: false,
  type: null,
  props: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        open: !state.open,
        type: action.payload.type,
        props: action.payload.props
      };
    case CLOSE_MODAL:
      return initialState;
    default:
      return state;
  }
};
