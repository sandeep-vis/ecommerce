import { Link } from 'react-router-dom';
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


export const ProductCard = ({ product }: { product: Product }) => (
  <div className="border p-4 rounded bg-amber-50 
  
  transition-transform transform hover:scale-105 hover:shadow-lg hover:border-red-600">
    <img src={product.image} alt={product.title} className="h-66 object-contain " />
    <h2 className="font-bold text-lg ">{product.title}</h2>
    <p>${product.price}</p>
    <Link to={`/product/${product.id}`} className="text-blue-500">View</Link>
  </div>
);







