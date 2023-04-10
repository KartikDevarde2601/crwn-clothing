import React from "react";
import './checkout-item.styles.scss';
import { connect } from "react-redux";
import { clearItemFromCart,additem,removeitem } from "../../redux/cart/cart.action";

const CheckoutItem =({cartItem,clearItem,additem,removeitem})=>{
    const {name,imageUrl,quantity,price} = cartItem;
return(
    <div className="checkout-item">
    <div className="image-container">
        <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">
        <div className="arrow" onClick={() => removeitem(cartItem)}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => additem(cartItem)}>&#10095;</div>
   </span>
    <span className="price">{price}</span>
    <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>
    </div>
)}

const mapDispatchToProps = Dispatch =>({
    clearItem:item => Dispatch(clearItemFromCart(item)),
    additem:item => Dispatch(additem(item)),
    removeitem:item => Dispatch(removeitem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);