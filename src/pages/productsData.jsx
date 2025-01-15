import React, { useState, useEffect } from "react";

const API = ({ onDataFetched }) => {
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
      .then((jsonData) => {
        onDataFetched(jsonData.products);
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [onDataFetched]);

  if (isLoading) {
    return <div className="text-center py-10">Loading Data...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500">
        Error... {JSON.stringify(error)}
      </div>
    );
  }

  return null; // This component doesn't render anything itself
};

export default API;
