import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        console.log("response from Axios API", response.data);
        setProducts(response.data.products); // Access the `products` array from the API response
      } catch (err) {
        setError(err); // Set the error if the request fails
      } finally {
        setIsLoading(false); // Ensure loading is false after the request completes
      }
    };

    fetchProducts();
  }, []);

  return { products, isLoading, error };
};
