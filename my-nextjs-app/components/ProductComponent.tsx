import React from 'react';
import { useCart } from '../context/CartContext';
import { Product } from '../interfaces';

interface ProductComponentProps {
  product: Product;
}

const ProductComponent: React.FC<ProductComponentProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="border p-4 mb-4">
      <h3 className="text-xl font-bold">{product.name}</h3>
      <p className="text-gray-600">{product.description}</p>
      <button
        onClick={handleAddToCart}
        className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductComponent;
