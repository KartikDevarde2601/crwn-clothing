import CartActionTypes from './cart.type';

export const tagglecartHidden = ()=>({
    type:CartActionTypes.TOGGLE_CART_HIDDEN,
    })

export const additem = item =>({
    type:CartActionTypes.AND_ITEMS,
    payload:item
})