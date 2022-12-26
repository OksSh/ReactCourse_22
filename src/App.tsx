import { Loader } from './components/Loader';
import { Product } from './components/Product';
import { useProducts } from './hooks/products';
import { Error } from './components/Error';
import { Modal } from './components/Modal';
import { CreateProduct } from './components/CreateProduct';
import { useState } from 'react';
import { IProduct } from './models';

function App() {
  const { loading, error, products, addProduct } = useProducts();
  const [modal, setModal] = useState<Boolean>(false);
  const createHandler = (product: IProduct) => {
    setModal(false);
    addProduct(product);
  };

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {loading && <Loader />}
      {error && <Error error={error} />}
      {modal && (
        <Modal onClose={() => setModal(false)} title='Create new product'>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}
      {products.map((item) => (
        <Product product={item} key={item.id} />
      ))}

      <button
        className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2'
        onClick={() => setModal(true)}
      >
        +
      </button>
    </div>
  );
}

export default App;
