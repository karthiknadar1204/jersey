import React, { useContext } from "react";
import { CartContext } from "../CartContext";

const CartPage = () => {
  const cart = useContext(CartContext);

    // Calculate total price
    const totalPrice = cart.items.reduce((acc, item) => {
      return acc + item.cost * item.quantity;
    }, 0);

  return (
    <div className="cart-container">
      <h1>Cart Page</h1>
      <div className="cart-items">
        {cart.items.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h2>{item.name}</h2>
              <p>Cost: ${item.cost}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="total-price">
        <h2>Total Price: ${totalPrice}</h2>
      </div>
    </div>
  );
};

export default CartPage;
