// import React from 'react';
// import Card from '../components/Card';
// import { products } from '../ProductStore';

// const AllProducts = () => {
//   return (
//     <div className="flex justify-center items-center min-h-screen p-4 mt-[-7rem]">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <Card 
//             key={product.id} 
//             id={product.id} 
//             name={product.name} 
//             image={product.image} 
//             cost={product.cost} 
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default AllProducts;




import React from 'react';
import Card from '../components/Card';
import { products } from '../ProductStore';

const AllProducts = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-4 mt-[-7rem]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default AllProducts;
