import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../CartContext';

const Card = ({ product }) => {
  const navigate = useNavigate();
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);
  
  console.log(cart.items);

  const handleClick = () => {
    navigate(`/product/${product.id}`, { state: { ...product } });
  };

  return (
    <div onClick={handleClick} className="card cursor-pointer min-w-72 h-72 bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{product.name}</h2>
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2" />
        <p className="text-lg font-semibold">${product.cost}</p>
      </div>
    </div>
  );
}

export default Card;
