import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { sendCartAction, getCartDataAction } from "./store/cart-slice";

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

let onFirstLoad = true; 

function App() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(getCartDataAction());
  }, [dispatch])

  useEffect(() => {
    if (onFirstLoad) {
      onFirstLoad = false;
      return;
    }

    if (cart.cartChanged) {
      dispatch(sendCartAction(cart));
      console.log('cahnged');
    }

  }, [cart, dispatch]);

  return (
    <Layout>
      <Cart />
      <Products />
    </Layout>
  );
}

export default App;
