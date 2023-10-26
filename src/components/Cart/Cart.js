import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {

    const cartItems = [];
    return (
      <Modal onHideCart={props.onHideCart}>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>35</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
      </Modal>
    );
}

export default Cart;