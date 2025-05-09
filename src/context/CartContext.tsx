import React, { createContext, useContext, useReducer, ReactNode } from 'react';
// import { Product } from '../types/Product';
export interface Product  {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};


interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const CartContext = createContext<any>(null);

const cartReducer = (state: CartState, action: any) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const exists = state.items.find(item => item.id === action.payload.id);
      if (exists) {
        return {
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    }
    case 'REMOVE_FROM_CART':
      return {
        items: state.items.filter(item => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
