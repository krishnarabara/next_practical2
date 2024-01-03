import React, { createContext, useReducer, useContext, ReactNode } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
}

interface CartItem {
  product: Product;
}

interface CartState {
  items: CartItem[];
}

interface CartContextProps {
  cartState: CartState;
  addToCart: (product: Product) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

type CartAction = { type: 'ADD_TO_CART'; payload: Product };

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        items: [...state.items, { product: action.payload }],
      };
    // Add more cases for other actions like remove from cart, update quantity, etc.
    default:
      return state;
  }
};

const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, { items: [] });

  const addToCart = (product: Product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <CartContext.Provider value={{ cartState, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };
