import React from 'react';
import List from './List';
import Total from './Total';
import CheckoutButton from './CheckoutButton';

const Cart = () => {
  return (
    <React.Fragment>
      <List />
      <Total />
      <CheckoutButton />
    </React.Fragment>
  );
}

export default Cart;