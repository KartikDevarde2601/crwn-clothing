import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { tagglecardHidden } from "../../redux/cart/cart.action";


import './card-icon.styles.scss'

const CardIcon = ({tagglecardHidden}) =>(
   <div className="cart-icon" onClick={tagglecardHidden}>
    <ShoppingIcon className="shopping-icon"/>
    <span className="item-count"> 0 </span>
   </div>
)

const mapDispatchToProps = dispatch =>({
   tagglecardHidden:() => dispatch(tagglecardHidden())
})
export default connect(null,mapDispatchToProps)(CardIcon);