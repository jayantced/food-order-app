import classes from './Cart.module.css';

const Cart = () => {

    const cartItems = [];
    return (
      <div>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>35</span>
        </div>
        <div className={classes.action}>
            <button className={classes['button--alt']}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
      </div>
    );
}

export default Cart;