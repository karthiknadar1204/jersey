import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ id, name,image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log('Navigating to:', `/product/${id}`, { state: { name, image } });
    navigate(`/product/${id}`, { state: { name, image } });
  };
  return (
    <div onClick={handleClick} className="card cursor-pointer min-w-72 h-64 bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <img src={image} alt={name} className="w-full h-48 object-cover" />
      </div>
    </div>
  );
}

export default Card;
