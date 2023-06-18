import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));
 
const persistor = persistStore(store);

const exportObject = { 
    store,
   persistor 
};


export default exportObject;



