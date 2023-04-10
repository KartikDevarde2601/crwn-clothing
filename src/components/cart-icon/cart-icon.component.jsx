import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { tagglecartHidden } from "../../redux/cart/cart.action";
import { selectCartItemCount } from "../../redux/cart/cart.selectors";

import './cart-icon.styles.scss'

const CardIcon = ({tagglecartHidden, itemCount}) =>(
   <div className="cart-icon" onClick={tagglecartHidden}>
    <ShoppingIcon className="shopping-icon"/>
    <span className="item-count"> {itemCount} </span>
   </div>
)

const mapStateToProps = (state)=>({
   itemCount:selectCartItemCount(state)
})

const mapDispatchToProps = dispatch =>({
   tagglecartHidden:() => dispatch(tagglecartHidden())
})

export default connect(mapStateToProps,mapDispatchToProps)(CardIcon);



