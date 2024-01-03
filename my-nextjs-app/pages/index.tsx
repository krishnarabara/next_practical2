import React from 'react';
import ProductComponent from '../components/ProductComponent';
import { Product } from '../interfaces';


const products: Product [] = [
  { id: 1, 
    name: 'Product 1', 
    description: 'Description 1'
   },
  { id: 2,
    name: 'Product 2', 
    description: 'Description 2' 
  },
  { id: 2, 
    name: 'Product 3', 
    description: 'Description 3' 
  },
  { id: 2, 
    name: 'Product 4', 
    description: 'Description 4' 
  },
  { id: 2, 
    name: 'Product 5', 
    description: 'Description 5' 
  },
  
];

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Product List</h1>
      {products.map((product) => (
        <ProductComponent key={product.id} product={product} />
      ))}
    </div>
  );
};

export default HomePage;
