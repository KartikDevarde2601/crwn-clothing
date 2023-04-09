import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { tagglecardHidden } from "../../redux/cart/cart.action";
import { selectCartItemCount } from "../../redux/cart/cart.selectors";

import './cart-icon.styles.scss'

const CardIcon = ({tagglecardHidden, itemCount}) =>(
   <div className="cart-icon" onClick={tagglecardHidden}>
    <ShoppingIcon className="shopping-icon"/>
    <span className="item-count"> {itemCount} </span>
   </div>
)

const mapStateToProps = (state)=>({
   itemCount:selectCartItemCount(state)
})

const mapDispatchToProps = dispatch =>({
   tagglecardHidden:() => dispatch(tagglecardHidden())
})

export default connect(mapStateToProps,mapDispatchToProps)(CardIcon);



