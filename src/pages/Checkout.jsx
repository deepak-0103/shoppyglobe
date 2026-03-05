import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Checkout() {

  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const placeOrder = () => {

    alert("Order placed");

    dispatch(clearCart());

    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <div className="checkout-container">

      <h2>Checkout</h2>

      <h3>Order Summary</h3>

      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        items.map((item) => (
          <div key={item.id} className="checkout-item">

            {/* Product Image */}
            <img
              src={item.thumbnail}
              alt={item.title}
              loading="lazy"
              className="checkout-img"
            />

            {/* Product Info */}
            <div className="checkout-info">

              <h4>{item.title}</h4>

              <p>Price: ${item.price}</p>

              <p>Quantity: {item.quantity}</p>

            </div>

          </div>
        ))
      )}

      <h3>User Details</h3>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <button onClick={placeOrder}>
        Place Order
      </button>

    </div>
  );
}

export default Checkout;