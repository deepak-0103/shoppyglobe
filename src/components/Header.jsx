import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cartItems = useSelector((state) => state.cart);

  // Calculate total quantity
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="header">
      <h1 className="logo">
        <Link to="/">🛍 ShoppyGlobe</Link>
      </h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart" className="cart-icon">
          🛒 Cart ({totalItems})
        </Link>
      </nav>
    </header>
  );
}

export default Header;