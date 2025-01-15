import { useEffect } from "react";
import { useState } from "react";

export const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products", {
      method: "GET",
    })
      .then((fetchResult) => {
        if (fetchResult.ok) return fetchResult.json();
        throw new Error("Failed to fetch data");
      })
      .then((jsonData) => setProducts(jsonData.products))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);
  return { products, isLoading, error };
};
