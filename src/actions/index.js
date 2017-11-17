import * as types from '../constants/actionTypes';

export const changeActiveItem = selectedItem => ({
  type: types.CHANGE_ACTIVE_ITEM,
  selectedItem
});
