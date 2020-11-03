import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51Hj0E8GyWvLN2isuJoDO0X5b2UXa8DBnPEvOFIYEG4rprQPoUUd3H8P7ocs7PSb7zTTbmnRIR0i9zgHF8OC4diyV000ogaFBYi';

  const onToken = (token) => {
    console.log(token);
    alert('payment successful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crwn Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
