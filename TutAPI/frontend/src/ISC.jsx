import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const useProducts = (search) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get("/api/products", {
          params: { search },
          signal: controller.signal,
        });
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        if (!axios.isCancel(err)) {
          setError(err.message);
          setLoading(false);
        }
      }
    };
    fetchProducts();
    return () => controller.abort();
  }, [search]);

  return { products, loading, error };
};

function ISC() {
  const [search, setSearch] = useState("");
  const { products, loading, error } = useProducts(search);

  return (
    <div className="ISC">
      {loading && <div>Loading...</div>}
      {error && <h1>{error}</h1>}
      <h1>Hello Api Calls</h1>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {!loading && !error && products.length === 0 && <p>No products found</p>}
      <h2>Number of products are: {products.length}</h2>
    </div>
  );
}

export default ISC;
