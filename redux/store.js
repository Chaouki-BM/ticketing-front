import {configureStore} from '@reduxjs/toolkit';
import userReducer from './reducers/user.reducer';
import thunk from 'redux-thunk';
import authReducer from './reducers/auth.reducer';
import EquipeReducer from './reducers/equip.reducer';
import errorReducer from './reducers/error.reducer';
export const store = configureStore({
  reducer: {
    users: userReducer,
    auth: authReducer,
    equipment: EquipeReducer,
    errors: errorReducer,
  },
  middleware: [thunk],
});
