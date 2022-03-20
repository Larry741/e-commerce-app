import { useDispatch, useSelector } from 'react-redux';
import { uiSliceActions } from '../../store/ui-slice';

import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalCartQty = useSelector(state => state.cart.totalCartQty)

  const toggleCartHandler = () => {
    dispatch(uiSliceActions.toggleCart())
  }

  return (
    <button onClick={toggleCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalCartQty}</span>
    </button>
  );
};

export default CartButton;
