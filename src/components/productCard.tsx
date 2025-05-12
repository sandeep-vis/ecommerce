// import { Link } from 'react-router-dom';
// // import { Product } from '../types/Product';

// export interface Product  {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: string;
//   image: string;
//   rating: {
//     rate: number;
//     count: number;
//   };
// };


// export const ProductCard = ({ product }: { product: Product }) => (
//   <div className="border p-4 rounded bg-amber-50 
  
//   transition-transform transform hover:scale-105 hover:shadow-lg hover:border-red-600">
//     <img src={product.image} alt={product.title} className="h-66 object-contain " />
//     <h2 className="font-bold text-lg ">{product.title}</h2>
//     <p>${product.price}</p>
//     <Link to={`/product/${product.id}`} className="text-blue-500">View</Link>
//   </div>
// );


import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

export interface Product {
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

export const ProductCard = ({ product }: { product: Product }) => {
  const { state, dispatch } = useCart();
  const [clicked, setClicked] = useState(false);

  const cartItem = state.items.find((item: any) => item.id === product.id);

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    setClicked(true);
    setTimeout(() => setClicked(false), 1000);
  };

  return (
    <div className="border p-4 rounded bg-amber-50 transition-transform transform hover:scale-105 hover:shadow-lg hover:border-red-600 flex flex-col justify-between">
      <img src={product.image} alt={product.title} className="h-60 object-contain mb-2" />
      <h2 className="font-bold text-lg">{product.title}</h2>
      <p className="mb-2">${product.price}</p>

      <div className="mt-auto flex flex-col gap-2">
        <Link to={`/product/${product.id}`} className="text-blue-500 underline">
          View Details
        </Link>

        <button
          onClick={handleAddToCart}
          className={`px-4 py-2 rounded text-white transition ${
            clicked ? 'bg-green-600' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {cartItem ? `Added (${cartItem.quantity})` : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};


