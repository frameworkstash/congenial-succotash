import {
  REQUEST_INDIVIDUAL_POST,
  RECEIVE_INDIVIDUAL_POST
} from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  item: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_INDIVIDUAL_POST:
      return {
        ...state,
        isFetching: !state.isFetching
      };
    case RECEIVE_INDIVIDUAL_POST:
      return {
        ...state,
        isFetching: !state.isFetching,
        lastUpdated: action.receivedAt,
        item: action.post
      };
    default:
      return state;
  }
};
