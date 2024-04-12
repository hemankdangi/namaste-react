import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {

  const cartItems = useSelector((store) => store.cart.items)

  const dispatch = useDispatch()

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <div className='w-6/12 m-auto p-3 text-center ' >
      <h1 className='bg-orange-100 text-2xl font-bold p-2'>Cart</h1>
      <button className='bg-orange-100 rounded-lg m-2 p-2' onClick={handleClearCart}> Clear Cart</button>
      {cartItems.length == 0 && <h1>Cart is an empty go and add now </h1>}
      <ItemList items={cartItems} /> 
    </div>
  );
};
export default Cart;
