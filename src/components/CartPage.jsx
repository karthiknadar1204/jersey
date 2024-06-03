import React, { useContext } from "react";
import { CartContext } from "../CartContext";

const CartPage = () => {
  const cart = useContext(CartContext);

  const totalPrice = cart.items.reduce((acc, item) => {
    return acc + item.cost * item.quantity;
  }, 0);

  const handleCheckout = () => {
    // Handle checkout logic here
    alert('Proceeding to checkout');
  };

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
              <button onClick={() => cart.addOneToCart(item.id)}>+</button>
              <button onClick={() => cart.removeOneFromCart(item.id)}>-</button>
              <button onClick={() => cart.deleteFromCart(item.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div className="total-price">
        <h2>Total Price: ${totalPrice}</h2>
      </div>
      <button className="pay-now-button" onClick={handleCheckout}>
        Pay Now
      </button>
    </div>
  );
};

export default CartPage;
