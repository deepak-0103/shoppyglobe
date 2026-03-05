import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

function Cart(){

 const items = useSelector(
  state => state.cart.items
 );

 if(items.length===0)
  return <h2>Your Cart is Empty</h2>;

 return(

  <div>

   <h2>Shopping Cart</h2>

   {items.map(item=>(
    <CartItem
     key={item.id}
     item={item}
    />
   ))}

   <Link to="/checkout">
     <button>Checkout</button>
   </Link>

  </div>

 );
}

export default Cart;