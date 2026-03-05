import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="container">
      <h1>Welcome to ShoppyGlobe 🛍</h1>
      <p>Your one-stop shop for amazing products at unbeatable prices.</p>

      <Link to="/products" className="shop-btn">
        Start Shopping
      </Link>
    </div>
  );
}

export default Home;