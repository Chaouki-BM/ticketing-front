import {
  GET_ALL_USERS,
  GET_ALL_USERS_SUCCESS,
  LOADING_USER_OFF,
  LOADING_USER_ON,
  SET_SELECTED_USER,
} from '../types';
const initUserState = {
  userLoading: false,
  userList: [],
  selectedUser: null,
};

const userReducer = (state = initUserState, action) => {
  let {type, payload} = action;
  switch (type) {
    case LOADING_USER_ON:
      return {...state, userLoading: true};
    case LOADING_USER_OFF:
      return {...state, userLoading: false};
    case GET_ALL_USERS_SUCCESS:
      return {...state, userList: payload};
    case SET_SELECTED_USER:
      return {...state, selectedUser: payload};

    default:
      return state;
  }
};

export default userReducer;
