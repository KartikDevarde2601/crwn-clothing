import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import './collection-item.styles.scss';
import { additem } from '../../redux/cart/cart.action';


const CollectionItem = ({ item,additem }) => {
  const { name, price, imageUrl } = item;
  return(
  <div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
    <CustomButton onClick={()=>additem(item)} inverted >
      Add To Cart
      </CustomButton>
  </div>
)};

const mapDispatchToProps = dispatch =>({
  additem:item => dispatch(additem(item)) // additem is a function that takes an item and returns an action object
})

export default connect(null,mapDispatchToProps)(CollectionItem);
