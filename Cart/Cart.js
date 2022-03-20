import { Fragment } from 'react';
import {  useSelector } from 'react-redux';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const showCart = useSelector(state => state.ui.showCart);
  const items = useSelector(state => state.cart.items)

  return (
    <Fragment>
      {showCart && (
        <Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>
          <ul>
            {items ? items.map((item) => {
              return <CartItem key={item.id} item={item} />;
            }) : <Fragment />}
          </ul>
        </Card>
      )}
    </Fragment>
  );
};

export default Cart;
