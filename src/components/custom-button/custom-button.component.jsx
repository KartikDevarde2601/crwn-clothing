import React from "react";
import './custom-button.style.scss';

const CustomButton = ({children,isGoogleSignIn,...otherprops})=>{
    return( 
        // if isGoogleSignIn is true then add the google-sign-in class to the button else add nothing
        <button className={`${isGoogleSignIn ? 'google-sign-in':''} custom-button`} {...otherprops}>
            {children}
        </button>
    )
}
export default CustomButton;