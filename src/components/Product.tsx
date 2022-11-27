import React, { useState } from 'react';
import { IProduct } from '../models';

interface Product {
  product: IProduct;
}

export function Product({ product }: Product) {
  const [details, setDetails] = useState(false);
  const btnBgClassName = details ? 'bg-blue-400' : 'bg-yellow-400';
  const btnClasses = ['py-2 px-4 border', btnBgClassName];

  return (
    <div className='border px-4 py-2 rounede flex flex-col items-center mb-2'>
      <img src={product.image} className='w-1/6 ' alt={product.title} />
      <p>{product.title}</p>
      <p className='font-bold'>${product.price}</p>
      <button
        className={btnClasses.join(' ')}
        onClick={() => setDetails((prev) => !prev)}
      >
        {details ? 'Hide details' : 'Show details'}
      </button>

      {details && (
        <div>
          <p>{product.description}</p>
          <p>
            <span style={{ fontWeight: 'bold' }}>
              Rate: {product.rating.rate}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
