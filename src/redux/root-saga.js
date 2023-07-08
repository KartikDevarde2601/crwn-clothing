import {call, all}  from 'redux-saga/effects';
import { shopsagas } from './shop/shop.sagas';
import { userSaga } from './user/user.sagas';
import { cartsaga } from './cart/cart.sagas';

export default function* rootSaga (){
  yield all([
    call(shopsagas),
    call(userSaga),
    call(cartsaga)
]);
}
