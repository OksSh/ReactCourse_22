import React from 'react';
import { Product } from './components/Product';
import { products } from './data/products';

function App() {
  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {products.map((item) => (
        <Product product={item} key={item.id} />
      ))}
    </div>
  );
}

export default App;
