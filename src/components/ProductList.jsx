import useProducts from "../hooks/useProducts";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";

function ProductList(){

 const {products,loading,error} = useProducts();

 const query = useSelector(
   state => state.search.query
 );

 const filtered = products.filter(p =>
   p.title.toLowerCase()
   .includes(query.toLowerCase())
 );

 if(loading) return <h2>Loading Products...</h2>;
 if(error) return <h2>Error: {error}</h2>;

 return(

  <div className="products">

   {filtered.map(product=>(
     <ProductItem
       key={product.id}
       product={product}
     />
   ))}

  </div>

 );

}

export default ProductList;