import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "../redux/searchSlice";

function Header() {

  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  // 🔥 Calculate total quantity
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="header">

      <h2>ShoppyGlobe</h2>

      <input
        type="text"
        placeholder="Search product"
        onChange={(e) =>
          dispatch(setSearch(e.target.value))
        }
      />

      <nav>
        <Link to="/">Home</Link>

        <Link to="/cart">
          Cart ({totalQuantity})
        </Link>
      </nav>

    </header>
  );
}

export default Header;