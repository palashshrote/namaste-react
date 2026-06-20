import {useSelector, useDispatch} from "react-redux";
import SwiggyMenuItem from "./SwiggyMenuItem";
import {emptyCart} from "../utils/cartSlice";
const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const clearCart = ()=> {
        dispatch(emptyCart());
    }
    return (
        <div className="m-2 p-2 text-center">
            <h1 className="text-3xl">This is a cart page</h1>
            <button onClick={clearCart}>Clear Cart</button>
            {cartItems.map((item, index) => <SwiggyMenuItem key={index} item={item} />)}
        </div>
    );
}

export default Cart;