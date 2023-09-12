import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price*100;
    const publishablekey = 'pk_test_51Np6DzJ53Q3xST2gyg1mW8AswsFMcqZbJlEeCnkyufYUBgf7FMx0sZASKUhqd3GKgbnE48FxWAfzBjrV8qWCF8mX00ihWprnsY';

    const onToken = token =>{
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`your total is $${price}`}
            amount={priceForStripe}
            panelLabel="pay now"
            token={onToken}
            stripeKey={publishablekey}
        />
    )
}

export default StripeCheckoutButton;