import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  // const [products,error,loading] =  CustomReactQuery("/api/products")   , we can call if req, to reduce the hassel below

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  // this error state is for edge case

  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   axios
  //     .get("/api/products")
  //     .then((response) => {setProducts(response.data)})
  //     .catch((error) => {console.log("Data fetching Error :: ", error)});
  // });

  //  now what if we have async awaits

  useEffect(() => {
    //  ;()() , this is a function called immediately invoked functions "IIFE"
    //  the semicolon is applied for safety purpose

    const controller = new AbortController();
    //  this cancels the older requests
    // : Using AbortController to cancel outdated requests is a great practice to prevent race conditions when search changes rapidly.
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get("/api/products?search=" + search, {
          signal: controller.signal,
        });
        setProducts(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        // to cancel older requests
        if (axios.isCancel(error)) {
          console.log("Request Cancelled", error.message);
          return;
        }
        setError(true);
        setLoading(false);
        // setError(
        //   error.response?.status === 404 ? "No products found" : "Server error"
        // );
      }
    })();

    // this is cleanup method , to unmount the method
    return () => {
      controller.abort();
    };
  }, [search]);

  // if (error) {
  //   return <h1>Something went wrong</h1>;
  // }
  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Something went wrong</h1>}

      <h1>Hello Api Calls</h1>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <h2>Number of products are : {products.length} </h2>
    </>
  );
}

export default App;
