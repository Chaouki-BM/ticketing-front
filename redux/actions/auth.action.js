import {postApi} from '../../utils/apiHelpers';
import {AUTH_USER, AUTH_USER_SUCCESS} from '../types';

const loginUser = () => {
  return {
    type: AUTH_USER,
  };
};

const loginUserSuccess = (user, token) => {
  return {
    type: AUTH_USER_SUCCESS,
    payload: {
      user: user,
      token: token,
    },
  };
};

const loginUserApi = (body, navigation) => async dispatch => {
  try {
    dispatch(loginUser());
    let result = await postApi('user/login', body);
    //console.log('Result', result.result);
    if (result.success) {
      let {name, id, role, token, firstName} = result.result;
      let user = {name, id, role, firstName};
      dispatch(loginUserSuccess(user, token));
      if (role == 0) {
        navigation.navigate('admin');
      } else {
        navigation.navigate('main');
      }
    } else {
      console.log('Wrong Credentials...fix error later');
    }
  } catch (error) {}
};

export {loginUserApi};
