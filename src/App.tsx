import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Product } from './components/Product';
import { IProduct } from './models';

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);

  async function fetchProducts() {
    const response = await axios.get<IProduct[]>(
      'https://fakestoreapi.com/products?limit=5'
    );
    setProducts(response.data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {products.map((item) => (
        <Product product={item} key={item.id} />
      ))}
    </div>
  );
}

export default App;
