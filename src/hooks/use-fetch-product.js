import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const useFetchProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchProduct = async () => {

      try {

        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        console.log("Response from Axios for fetching a Single Product", response.data);
        setProduct(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();


  }, [id]);
  return { product, isLoading, error };
};



