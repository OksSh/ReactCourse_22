import { Loader } from './components/Loader';
import { Product } from './components/Product';
import { useProducts } from './hooks/products';
import { Error } from './components/Error';
import { Modal } from './components/Modal';
import { CreateProduct } from './components/CreateProduct';

function App() {
  const { loading, error, products } = useProducts();
  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {loading && <Loader />}
      {error && <Error error={error} />}
      <Modal title='Create new product'>
        <CreateProduct />
      </Modal>
      {products.map((item) => (
        <Product product={item} key={item.id} />
      ))}
    </div>
  );
}

export default App;
