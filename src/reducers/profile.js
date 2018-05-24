import {
  PROFILE_PAGE_LOADED,
  PROFILE_PAGE_UNLOADED,
  PROFILE_SUBTYPE_LOADED
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case PROFILE_PAGE_LOADED:
      return {
        ...action.payload.profile
      };
    case PROFILE_SUBTYPE_LOADED:
      return {
        ...state,
        [action.subtype]: action.payload.tutorials
      };
    case PROFILE_PAGE_UNLOADED:
      return {};
    default:
      return state;
  }
};
