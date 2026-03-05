import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

function ProductItem({product}){

 const dispatch = useDispatch();

 return(

  <div className="product-card">

   <img
    src={product.thumbnail}
    alt={product.title}
    loading="lazy"
   />

   <h3>{product.title}</h3>

   <p>${product.price}</p>

   <button
    onClick={()=>dispatch(addToCart(product))}
   >
    Add to Cart
   </button>

   <Link to={`/product/${product.id}`}>
     View Details
   </Link>

  </div>

 );
}

export default ProductItem;