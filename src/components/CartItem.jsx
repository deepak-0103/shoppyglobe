import { useDispatch } from "react-redux";
import {
 removeFromCart,
 increaseQty,
 decreaseQty
} from "../redux/cartSlice";

function CartItem({item}){

 const dispatch = useDispatch();

 return(

  <div className="cart-item">

   <img src={item.thumbnail} width="80"/>

   <h4>{item.title}</h4>

   <button
    onClick={()=>dispatch(decreaseQty(item.id))}
   >-</button>

   {item.quantity}

   <button
    onClick={()=>dispatch(increaseQty(item.id))}
   >+</button>

   <button
    onClick={()=>dispatch(removeFromCart(item.id))}
   >
    Remove
   </button>

  </div>

 );
}

export default CartItem;