import CartActionTypes from './cart.type';
import { addItemToCart,removeItemFromCart } from './cart.utils';

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
    
    case CartActionTypes.CLEAR_ITEMS_FORM_CART:
        return{
        ...state,
        cartItems:state.cartItems.filter(
            cartItem =>cartItem.id !== action.payload.id)
        }
    case CartActionTypes.REMOVE_ITEMS:
        return{
            ...state,
            cartItems:removeItemFromCart(state.cartItems,action.payload)

        }

        default:
            return state
}
}
export default cartReducer;