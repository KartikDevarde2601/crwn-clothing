import { combineReducers } from 'redux'; 
// This is the function that allows us to combine multiple reducers into one root reducer

import userReducer from './user/user.reducer';

export default combineReducers({ 
  user: userReducer 
});
