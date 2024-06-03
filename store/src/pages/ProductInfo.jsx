import React, { useContext, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import IncrementDecrement from "../components/IncrementDecrement";
import { CartContext } from '../CartContext';

const ProductInfo = () => {
  const { id } = useParams();
  const location = useLocation();
  const { name, image, cost } = location.state || {};
  const cart = useContext(CartContext);

  const addToCart = () => {
    cart.addOneToCart(parseInt(id));
  };

  useEffect(() => {
    console.log("Cart Items:", cart.items);
  }, [cart.items]);

  console.log("Product Info:", { name, image, cost });

  return (
    <div className="product_container">
      <div className="product_image">
        <img src={image} alt={name} className="w-full h-48" />
      </div>
      <div className="product_details">
        <div className="product_name">
          <h2>{name}</h2>
          <h3>${cost}</h3>
        </div>
        <div className="description">
          Neque porro quisquam est, qui dolore
          <br /> ipsum quia dolor sit amet, consectetur adipisci velit,
          <br /> sed quia non incidunt lores ta porro ame.
          <br /> numquam eius modi tempora incidunt lores ta porro ame.
        </div>
        <div className="actions">
          <IncrementDecrement productId={parseInt(id)} />
          <button className="custom-button-3" onClick={addToCart}>Add to Cart</button>
        </div>
        <div className="additional_info">
          <p>Category: Shirts</p>
          <p>Free shipping on orders over $50!</p>
          <p>No-Risk Money Back Guarantee!</p>
          <p>No Hassle Refunds</p>
          <p>Secure Payments</p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
