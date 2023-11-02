import { useContext } from 'react';
import MealForm from './MealForm';
import classes from './MealItem.module.css';
import CartContext from '../../../store/cart-context'

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
    // console.log(amount);
  } 

    const price = `$${props.price.toFixed(2)}`;

    return (
      <li className={classes.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealForm onAddToCart={addToCartHandler}/>
        </div>
      </li>
    );
}

export default MealItem;