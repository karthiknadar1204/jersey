import React, { useState, useContext } from "react";
import { CartContext } from "../CartContext";
import IncrementDecrement from "./IncrementDecrement";
import Modal from "react-modal";

const CartPage = () => {
  const cart = useContext(CartContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: ""
  });

  const totalPrice = cart.items.reduce((acc, item) => {
    return acc + item.cost * item.quantity;
  }, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:4000/checkout', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: userData, items: cart.items })
        });

        const data = await response.json();
        if (response.ok) {
            window.location.href = data.url;
        } else {
            console.error("Checkout error:", data.error);
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
      <button className="pay-now-button" onClick={() => setModalIsOpen(true)}>
        Pay Now
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="User Information"
        ariaHideApp={false}
        className="modal"
        overlayClassName="overlay"
      >
        <h2>User Information</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Phone Number:
            <input
              type="text"
              name="phone"
              value={userData.phone}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Address:
            <textarea
              name="address"
              value={userData.address}
              onChange={handleInputChange}
              required
            ></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
    </div>
  );
};

export default CartPage;
