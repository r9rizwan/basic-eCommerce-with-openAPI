import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const useFetchProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`, {
      method: "GET",
    })
      .then((fetchResult) => {
        if (fetchResult.ok) return fetchResult.json();
        throw new Error("Failed to fetch data");
      })
      .then((jsonData) => setProduct(jsonData))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);
  return { product, isLoading, error };
};
