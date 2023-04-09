import { combineReducers } from 'redux'; 
// This is the function that allows us to combine multiple reducers into one root reducer
import cardReducer from './cart/cart.reducer';
import userReducer from './user/user.reducer';

export default combineReducers({ 
  user: userReducer,
  cart:cardReducer  
  // This is the key value pair that we are passing in. The key is the actual property that we are going to use to represent the value of this reducer. The value is the actual reducer that we are passing in.
});
