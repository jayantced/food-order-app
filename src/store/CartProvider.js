import CartContext from "./cart-context";

const CartProvider = (props)=> {

    const addItemToCartHandler = ()=> {

    };

    const removeItemFromCartHandler = ()=> {

    };

    const cartContext = {
        items: [],
        amount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return(
        <CartContext.Provider>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;