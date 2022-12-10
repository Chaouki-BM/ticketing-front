import {AUTH_USER, AUTH_USER_SUCCESS} from '../types';

const authData = {
  token: '',
  userData: null,
  loading: false,
};

const authReducer = (state = authData, action) => {
  let {type, payload} = action;
  switch (type) {
    case AUTH_USER:
      return {...state, loading: true};
    case AUTH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: payload.user,
        token: payload.token,
      };

    default:
      return state;
  }
};

export default authReducer;
