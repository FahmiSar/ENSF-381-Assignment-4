import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cart, setCartData}) => {
  const calculateTotalCost = () => {
    const totalCost = cart.reduce((total, item) => total + (item.price * item.quantity), 0)
    return totalCost.toFixed(2);
  };

  const removeFromCart = (removedItem) => {
    if(removedItem.quantity > 1){
      setCartData(prevCartData => prevCartData.map(item=> {
        if(item.id === removedItem.id){
          return{...item, quantity: item.quantity - 1};
        }
        return item;
      }));
    } else {
      setCartData(prevCartData => prevCartData.filter(item => item.id !== removedItem.id));
    }
  }

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.map(item => (
        <CartItem key={item.id} item={item} removeFromCart = {removeFromCart}/>
      ))}
      <h3>Total Cost (in cart): ${calculateTotalCost()}</h3>
    </div>
  );
};

export default Cart;
