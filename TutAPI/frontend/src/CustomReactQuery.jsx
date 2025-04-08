import React, { useState, useEffect } from "react";
import axios from "axios";

const CustomReactQuery = (urlPath) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  // this error state is for edge case

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(urlPath);
        //   in place of this "/api/products", use urlPath standard syntax
        setProducts(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
        console.log("Data fetching Error :: ", error);
      }
    })();
  }, []);

  return [products, error, loading];
};

// now we can just call this function CustomReactQuery and pass the url CustomReactQuery("/api/products") ,inside the file we want

export default CustomReactQuery;
