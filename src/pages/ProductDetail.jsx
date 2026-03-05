import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductDetail(){

 const {id} = useParams();

 const [product,setProduct] = useState(null);
 const [error,setError] = useState(null);

 const dispatch = useDispatch();

 useEffect(()=>{

  const fetchProduct = async()=>{

   try{

    const res = await fetch(
     `https://dummyjson.com/products/${id}`
    );

    const data = await res.json();

    setProduct(data);

   }catch(err){

    setError("Failed to load product");

   }

  };

  fetchProduct();

 },[id]);

 if(error) return <h2>{error}</h2>;
 if(!product) return <h2>Loading...</h2>;

 return(

  <div className="detail">

   <img
    src={product.thumbnail}
    loading="lazy"
   />

   <h2>{product.title}</h2>

   <p>{product.description}</p>

   <h3>${product.price}</h3>

   <button
    onClick={()=>dispatch(addToCart(product))}
   >
    Add to Cart
   </button>

  </div>

 );

}

export default ProductDetail;