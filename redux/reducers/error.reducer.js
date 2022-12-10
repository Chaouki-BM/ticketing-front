import {
  GET_ALL_ERRORS,
  SET_SELECTED_ERROR_ID,
  SET_SELECTED_ERROR_ITEM,
} from '../types';

const errorInitState = {
  errorList: [],
  loading: false,
  selectedErrorId: '',
  selectedItem: null,
};
const errorReducer = (state = errorInitState, action) => {
  let {type, payload} = action;
  switch (type) {
    case GET_ALL_ERRORS:
      return {...state, errorList: payload};
    case SET_SELECTED_ERROR_ID:
      return {...state, selectedErrorId: payload};
    case SET_SELECTED_ERROR_ITEM:
      return {...state, selectedItem: payload};

    default:
      return state;
  }
};

export default errorReducer;
