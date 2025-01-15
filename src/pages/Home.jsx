import React from "react";
import { Card, HeroSection } from "../components";
import { useFetchProducts } from "../hooks";
import HeartIconWrapper from "../components/icons/heartIconWrapper";

const Home = () => {
  const { products, isLoading, error } = useFetchProducts();
  console.log("Fetched Products", products);

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

  return (
    <div className="flex flex-col gap-10 mt-8 mb-16">
      <HeroSection />
      <div className="container grid gap-x-10 gap-y-6 place-items-stretch sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products?.map((product) => (
          <div key={product.id} className="w-full h-full relative">
            <Card {...product} />
            <div className="absolute top-2 right-2">
              <HeartIconWrapper item={product} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
