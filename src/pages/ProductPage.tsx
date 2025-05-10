import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../api/products';
import { useCart } from '../context/CartContext';

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
}

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [showAlert, setShowAlert] = useState(false);
  const [clicked, setClicked] = useState(false);
  const { dispatch } = useCart();

  useEffect(() => {
    fetchProductById(Number(id)).then(setProduct);
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;
    dispatch({ type: 'ADD_TO_CART', payload: product });
    setClicked(true);
    setShowAlert(true);
    
    setTimeout(() => {
      setShowAlert(false);
      setClicked(false);
    }, 2000);
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-4 relative">
      {showAlert && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
          ✅ Added to Cart!
        </div>
      )}

      <img src={product.image} alt={product.title} className="h-60 object-contain mx-auto" />
      <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
      <p className="mt-2">{product.description}</p>
      <p className="text-lg font-bold mt-2">${product.price}</p>

      <button
        onClick={handleAddToCart}
        className={`mt-4 px-4 py-2 rounded text-white transition ${
          clicked ? 'bg-green-600' : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {clicked ? 'Added!' : 'Add to Cart'}
      </button>
    </div>
  );
}

