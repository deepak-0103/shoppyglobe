import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductItem({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <img
        src={product.thumbnail}
        alt={product.title}
        loading="lazy"
      />

      <h3>{product.title}</h3>
      <p>${product.price}</p>

      <div className="product-actions">
        <Link to={`/products/${product.id}`} className="details-btn">
          View Details
        </Link>

        <button
          onClick={() => dispatch(addToCart(product))}
          className="add-btn"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductItem;