import { combineReducers } from 'redux'; 
// This is the function that allows us to combine multiple reducers into one root reducer
import cardReducer from './cart/cart.reducer';
import userReducer from './user/user.reducer';

import persistReducer from 'redux-persist/es/persistReducer';// This is the actual persist reducer that we need from redux persist
import storage from 'redux-persist/lib/storage';// This is the actual local storage object on our window browser

const persistConfig ={// This is the actual configuration that we want redux persist to use
  key:'root',
  storage,
  whitelist:['cart']
}

const rootReducer = combineReducers({
  user: userReducer,
  cart:cardReducer  
});
  // This is the key value pair that we are passing in. The key is the actual property that we are going to use to represent the value of this reducer. The value is the actual reducer that we are passing in.

  export default persistReducer(persistConfig,rootReducer);
  // We are exporting the root reducer. We are going to pass in the persist config and the root reducer.
