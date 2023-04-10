import CartActionTypes from './cart.type';

export const tagglecartHidden = ()=>({
    type:CartActionTypes.TOGGLE_CART_HIDDEN,
    })

export const additem = item =>({
    type:CartActionTypes.AND_ITEMS,
    payload:item
})

export const removeitem = item =>({
    type:CartActionTypes.REMOVE_ITEMS,
    payload:item
})

export const clearItemFromCart = item=>({
    type:CartActionTypes.CLEAR_ITEMS_FORM_CART,
    payload:item
})

