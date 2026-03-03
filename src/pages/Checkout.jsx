import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOrder = () => {
    alert("Order placed");
    dispatch(clearCart());
    setTimeout(() => navigate("/"), 1500);
  };

  return (
    <div>
      <h2>Checkout</h2>
      {cart.map(item => (
        <p key={item.id}>{item.title} x {item.quantity}</p>
      ))}

      <button onClick={handleOrder}>Place Order</button>
    </div>
  );
}

export default Checkout;