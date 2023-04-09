import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { useHistory } from 'react-router-dom';

import './cart-dropdown.styles.scss';



const CartDropdown = ({ cartItems }) => {

  const history= useHistory();

   return(
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        // if cartItems.lenght is true then render the cartItems.map
      cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))
      }
    </div> 
    <CustomButton onClick={()=>history.push("/checkout")}>
      GO TO CHECKOUT 
    </CustomButton>
  </div>
)};

const mapStateToProps = (state) => ({
  cartItems:selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);