import { useDispatch } from 'react-redux';

import { cartActions } from '../../store/cart-slice';

import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const {
    id = props.prod.id,
    title = props.prod.title,
    price = props.prod.price,
    description = props.prod.description,
    quantity = props.prod.quantity,
    total = props.prod.price
  } = props;

  const product = {
    id,
    title,
    price,
    description,
    quantity,
    total
  };

  const addItemToCart = () => {
    dispatch(cartActions.addProductToCart(product));
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
