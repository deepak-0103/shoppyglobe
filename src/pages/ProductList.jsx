import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "../redux/productSlice";
import useFetchProducts from "../hooks/useFetchProducts";
import ProductItem from "../components/ProductItem";

function ProductList() {
  const { products, loading, error } = useFetchProducts();
  const search = useSelector(state => state.products.searchTerm);
  const dispatch = useDispatch();

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <input
        placeholder="Search products..."
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />

      <div className="grid">
        {filtered.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;