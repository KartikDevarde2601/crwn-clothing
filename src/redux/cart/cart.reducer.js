import CartActionTypes from './cart.type';
import { addItemToCart } from './cart.utils';

const INITIAL_STATE ={
    hidden:true,
    cartItems:[]
}

const cartReducer =(state=INITIAL_STATE,action)=>{
switch(action.type){
    case CartActionTypes.TOGGLE_CART_HIDDEN:
        return{
            ...state,
            hidden:!state.hidden
        }
    case CartActionTypes.AND_ITEMS:
        return{
         ...state,
         cartItems : addItemToCart(state.cartItems,action.payload) 


        }
        default:
            return state
}
}
export default cartReducer;