import { useEffect, useState } from 'react';
// import { Product } from '../types/Product';//
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


import { fetchProducts } from '../api/products';
import { ProductCard } from '../components/productCard';
import { SearchBar } from '../components/SearchBar';
import { CategoryFilter } from '../components/CategoryFilter';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    fetchProducts().then(data => {
      setProducts(data);
      setFiltered(data);
    });
  }, []);

  useEffect(() => {
    let result = products;
    if (search) result = result.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));
    if (category) result = result.filter(p => p.category === category);
    setFiltered(result);
  }, [search, category, products]);

  const categories = Array.from(new Set(products.map(p => p.category)));

  return (
    <div className="p-4">
      <SearchBar value={search} onChange={setSearch} />
      <CategoryFilter categories={categories} selected={category} onChange={setCategory} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {filtered.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  );
}
