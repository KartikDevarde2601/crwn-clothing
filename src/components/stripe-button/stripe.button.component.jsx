import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price*100;
    const publishAbleKey = 'pk_test_51NMU4zSHjX9Y4j7U09jsuKAau0AmStqi3fv07iv1w1pcXFHDghaGwI2cWis0tmVSWLjBEhVU3ILqVmaQzgrEmDUC00dmCrenNT';

   const onToken = (token) => {
        console.log(token);
        alert("Payment Successful");
    }

    return (
        <StripeCheckout
        label="Pay Now"
        name='Cwon Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        stripeKey={publishAbleKey}
        token={onToken}
        />
    )
}

export default StripeCheckoutButton;