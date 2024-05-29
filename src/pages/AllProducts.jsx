import React from 'react';
import Card from '../components/Card';
import logo from "../assets/logo.png";

const products = [
  { id: 1, name: "Product 1", image: logo },
  { id: 2, name: "Product 2", image: logo },
  { id: 3, name: "Product 3", image: logo },
  { id: 4, name: "Product 4", image: logo },
  { id: 5, name: "Product 5", image: logo },
  { id: 6, name: "Product 6", image: logo },
];

const AllProducts = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-4 mt-[-7rem]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <Card key={product.id} id={product.id} name={product.name} image={product.image} />
        ))}
      </div>
    </div>
  );
}

export default AllProducts;
