import {
  GET_EQUIPEMENT_LIST,
  SET_EQUIPEMENT_LOADING_OFF,
  SET_EQUIPEMENT_LOADING_ON,
  SET_SELECTED_EQUIPMENT,
} from '../types';

const equipInitState = {
  loading: false,
  equipList: [],
  selectedEquip: null,
};

const EquipeReducer = (state = equipInitState, action) => {
  let {type, payload} = action;
  switch (type) {
    case SET_EQUIPEMENT_LOADING_ON:
      return {...state, loading: true};
    case SET_EQUIPEMENT_LOADING_OFF:
      return {...state, loading: false};
    case GET_EQUIPEMENT_LIST:
      return {...state, equipList: payload};
    case SET_SELECTED_EQUIPMENT:
      return {...state, selectedEquip: payload};

    default:
      return state;
  }
};

export default EquipeReducer;
