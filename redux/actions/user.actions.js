import {getApi, postApi} from '../../utils/apiHelpers';
import {
  GET_ALL_USERS_SUCCESS,
  LOADING_USER_OFF,
  LOADING_USER_ON,
} from '../types';

const addUserApi = (body, token) => async dispatch => {
  dispatch({
    type: LOADING_USER_ON,
  });
  let result = await postApi('user/register', body);
  //console.log('Result', result);
  dispatch({
    type: LOADING_USER_OFF,
  });
  dispatch(getAllUsersApi(token));
};
const getAllUsersApi = token => async dispatch => {
  try {
    dispatch({
      type: LOADING_USER_ON,
    });
    let result = await getApi('user', {headers: {'access-token': token}});

    if (result) {
      console.log('Result', result);
      dispatch({
        type: LOADING_USER_OFF,
      });
      dispatch({
        type: GET_ALL_USERS_SUCCESS,
        payload: result.result,
      });
    }
  } catch (error) {}
};
export {addUserApi, getAllUsersApi};
