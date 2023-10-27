

import { useDispatch, useSelector } from "react-redux"; 
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart())

    }
    return(
        <div className="text-center m-4 p-4">
            <h1 className="text-4xl font-bold">CART ITEMS</h1>
            <div className="w-6/12 m-auto">
                <button  onClick={handleClearCart} className="bg-black text-white rounded-md p-2 m-4 hover:cursor-pointer">Clear Cart</button>
                {cartItems.length === 0 && <h1>Cart Is Empty. Add Items To The Cart</h1>}
                <ItemList items={cartItems} />
            </div>
        </div>
    )
    };

export default Cart;