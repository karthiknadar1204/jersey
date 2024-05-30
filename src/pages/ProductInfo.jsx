import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import IncrementDecrement from '../components/IncrementDecrement';

const ProductInfo = () => {
  const { id } = useParams();
  const location = useLocation();
  const { name, image } = location.state || {};

  console.log('Product Info:', { name, image });

  return (
    <div className="product_container">
      <div className="product_image">
        <img src={image} alt={name} className="w-full h-48" />
      </div>
      <div className="product_details">
        <div className="product_name">
          <h2>{name}</h2>
        </div>
        <div className="description">
          Neque porro quisquam est, qui dolore<br /> ipsum quia
          dolor sit amet, consectetur adipisci velit,<br /> sed
          quia non incidunt lores ta porro ame.<br /> numquam
          eius modi tempora incidunt lores ta porro ame.
        </div>
        <div className="actions">
          <IncrementDecrement />
          <button className="custom-button-3">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
