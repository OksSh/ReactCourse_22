import { Loader } from '../components/Loader';
import { Product } from '../components/Product';
import { useProducts } from '../hooks/products';
import { Error } from '../components/Error';
import { Modal } from '../components/Modal';
import { CreateProduct } from '../components/CreateProduct';
import { useContext } from 'react';
import { IProduct } from '../models';
import { ModalContext } from '../context/ModalContext';

export function ProductsPage() {
  const { loading, error, products, addProduct } = useProducts();
  const {
    modal,
    open: openModal,
    close: closeModal,
  } = useContext(ModalContext);

  const createHandler = (product: IProduct) => {
    closeModal();
    addProduct(product);
  };

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {loading && <Loader />}
      {error && <Error error={error} />}
      {modal && (
        <Modal onClose={closeModal} title='Create new product'>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}
      {products.map((item) => (
        <Product product={item} key={item.id} />
      ))}

      <button
        className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2'
        onClick={openModal}
      >
        +
      </button>
    </div>
  );
}
