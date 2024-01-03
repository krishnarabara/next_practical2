import React from 'react';
import { useCart } from '../context/CartContext'; // Import the useCart hook
import { Product } from '../interfaces';

const products: Product[] = [
  { id: 1, name: 'Mobile', description: 'iPhone' },
  { id: 2, name: 'TV', description: 'Sony' },
  { id: 3, name: 'Computer', description: 'Dell' },
  { id: 4, name: 'AC', description: 'LG' },
  { id: 5, name: 'Freeze', description: 'Samsung' },
  { id: 6, name: 'Mobile', description: 'Android' },
]

const HomePage: React.FC = () => {
  const { addToCart } = useCart(); 
  

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Product List</h1>
      <div className="bg-blue-500 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-md bg-white shadow-md">
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

