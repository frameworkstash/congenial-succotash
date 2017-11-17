import { CHANGE_ACTIVE_ITEM } from '../constants/actionTypes';

const initialState = {
  activeItem: 'home'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ACTIVE_ITEM:
      return {
        ...state,
        activeItem: action.selectedItem
      };
    default:
      return state;
  }
};
