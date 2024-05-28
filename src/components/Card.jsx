import React from 'react';

const Card = () => {
  return (
    <div className="card max-w-sm h-64 bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">Card Title</h2>
        <p className="text-gray-700">This is a reusable card component. You can place any content here.</p>
      </div>
    </div>
  );
}

export default Card;
