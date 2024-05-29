import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const ProductInfo = () => {
  const { id } = useParams();
  const location = useLocation();
  const { name, image } = location.state || {};

  console.log('Product Info:', { name, image });

  return (
    <div>
      <h1>Product Detail Page</h1>
      {/* {name &&  */}
      <div className='product_name' >
        <h2>{name}</h2>
      </div>
      {/* } */}
      {/* {image &&  */}
      <div className='product_image' >
        <img src={image} alt={name} className="w-full h-48" />
      </div>
      {/* } */}
    </div>
  );
};

export default ProductInfo;
