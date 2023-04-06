import CardActionTypes from './cart.type';
import { addItemToCart } from './cart.utils';

const INITIAL_STATE ={
    hidden:true,
    cardItems:[]
}

const cardReducer =(state=INITIAL_STATE,action)=>{
switch(action.type){
    case CardActionTypes.TOGGLE_CART_HIDDEN:
        return{
            ...state,
            hidden:!state.hidden
        }
    case CardActionTypes.AND_ITEMS:
        return{
         ...state,
         cardItems : addItemToCart(state.cardItems,action.payload) 


        }
        default:
            return state
}
}
export default cardReducer;