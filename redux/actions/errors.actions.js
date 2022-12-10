import {getApi, putApi} from '../../utils/apiHelpers';
import {GET_ALL_ERRORS} from '../types';

const getAllErrors = data => {
  return {
    type: GET_ALL_ERRORS,
    payload: data,
  };
};

const getAllErrorsApi = token => async dispatch => {
  try {
    let result = await getApi('error', {
      headers: {'access-token': token},
    });
    dispatch(getAllErrors(result.result));
  } catch (error) {}
};
const fixErrorApi = (token, body, id) => async dispatch => {
  try {
    let result = await putApi(`error/fix/${id}`, body, {
      headers: {'access-token': token, 'Content-Type': 'multipart/form-data'},
    });
    if (result) {
      dispatch(getAllErrorsApi());
    }
  } catch (error) {}
};

export {getAllErrorsApi, fixErrorApi};
