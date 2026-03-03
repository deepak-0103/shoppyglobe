import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../redux/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} />

      <div className="cart-details">
        <h4>{item.title}</h4>
        <p>${item.price}</p>

        <div className="quantity-controls">
          <button onClick={() => dispatch(decreaseQty(item.id))}>
            -
          </button>

          <span>{item.quantity}</span>

          <button onClick={() => dispatch(increaseQty(item.id))}>
            +
          </button>
        </div>

        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          className="remove-btn"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;