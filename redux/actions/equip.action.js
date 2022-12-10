import {getApi, postApi} from '../../utils/apiHelpers';
import {
  GET_EQUIPEMENT_LIST,
  SET_EQUIPEMENT_LOADING_OFF,
  SET_EQUIPEMENT_LOADING_ON,
} from '../types';

const addEquipApi = (body, token) => async dispatch => {
  try {
    dispatch({
      type: SET_EQUIPEMENT_LOADING_ON,
    });
    let result = await postApi('equipment/create', body, {
      headers: {'access-token': token},
    });
    if (result) {
      dispatch({
        type: SET_EQUIPEMENT_LOADING_OFF,
      });
      dispatch(getAllEquipApi(token));
    }
  } catch (error) {}
};

const getAllEquipApi = token => async dispatch => {
  try {
    let result = await getApi('equipment', {
      headers: {'access-token': token},
    });
    console.log('Equip Result', result);
    dispatch({
      type: GET_EQUIPEMENT_LIST,
      payload: result.result,
    });
  } catch (error) {}
};

export {addEquipApi, getAllEquipApi};
