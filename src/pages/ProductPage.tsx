import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../api/products';
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

import { useCart } from '../context/CartContext';

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const { dispatch } = useCart();

  useEffect(() => {
    fetchProductById(Number(id)).then(setProduct);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <img src={product.image} alt={product.title} className="h-60 object-contain" />
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p>{product.description}</p>
      <p className="text-lg font-bold">${product.price}</p>
      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white"
        onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
      >Add to Cart</button>
    </div>
  );
}