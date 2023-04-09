import React from 'react';

import './custom-buttom.styles.scss';

const CustomButton = ({ checkout,children, isGoogleSignIn,inverted, ...otherProps }) => (
  <button
    className={
    `${checkout ? 'checkout':  ''}
    ${inverted ? 'inverted':  ''}
    ${isGoogleSignIn ? 'google-sign-in' : ''}
     custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
