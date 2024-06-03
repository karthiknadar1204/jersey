import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from '../CartContext';

const IncrementDecrement = ({ productId }) => {
  const { getProductQuantity, addOneToCart, removeOneFromCart } = useContext(CartContext);
  const [count, setCount] = useState(getProductQuantity(productId));

  useEffect(() => {
    setCount(getProductQuantity(productId));
  }, [getProductQuantity, productId]);

  const increment = () => {
    console.log("Incrementing product with ID:", productId); 
    addOneToCart(productId);
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      console.log("Decrementing product with ID:", productId);
      removeOneFromCart(productId);
      setCount(count - 1);
    } else {
      removeOneFromCart(productId);
    }
  };

  return (
    <div className="increment_decrement">
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default IncrementDecrement;
