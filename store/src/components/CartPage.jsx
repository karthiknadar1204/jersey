import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import IncrementDecrement from "./IncrementDecrement";

const CartPage = () => {
  const cart = useContext(CartContext);

  const totalPrice = cart.items.reduce((acc, item) => {
    return acc + item.cost * item.quantity;
  }, 0);

  const checkout = async () => {
    try {
      const response = await fetch('http://localhost:4000/checkout', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ items: cart.items })
      });

      const data = await response.json();
      if (data.url) {
        window.location.assign(data.url);
      } else {
        console.error("Checkout URL not found");
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
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
              <IncrementDecrement productId={item.id} />
              <button onClick={() => cart.deleteFromCart(item.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div className="total-price">
        <h2>Total Price: ${totalPrice}</h2>
      </div>
      <button className="pay-now-button" onClick={checkout}>
        Pay Now
      </button>
    </div>
  );
};

export default CartPage;
