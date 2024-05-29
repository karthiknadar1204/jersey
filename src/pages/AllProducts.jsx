import React from 'react';
import Card from '../components/Card';

const AllProducts = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-4 mt-[-7rem]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default AllProducts;
