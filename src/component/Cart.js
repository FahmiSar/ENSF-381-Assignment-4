import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cart }) => {
  const calculateTotalCost = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      <h3>Total Cost: {calculateTotalCost()}</h3>
    </div>
  );
};

export default Cart;
