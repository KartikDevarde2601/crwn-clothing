import CardActionTypes from './cart.type';

export const tagglecardHidden = ()=>({
    type:CardActionTypes.TOGGLE_CART_HIDDEN,
    })

export const additem = item =>({
    type:CardActionTypes.AND_ITEMS,
    payload:item
})