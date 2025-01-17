import React from "react";
import { Card, HeroSection } from "../components";
import { useFetchProducts } from "../hooks";
import HeartIconWrapper from "../components/icons/heartIconWrapper";

const Home = () => {
  const { products, isLoading, error } = useFetchProducts();

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
      <div className="justify-items-center container grid gap-24 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {products?.map((product) => (
          <div
            key={product.id}
            className="w-[372px] h-[500px] relative rounded-lg">
            <Card id={product.id}>
              {product.thumbnail && (
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full object-fill mb-4"
                />
              )}
              {product.title && (
                <h2 className="text-xl font-bold mb-2">{product.title}</h2>
              )}
              {product.price && (
                <p className="text-gray-700 mb-2 text-sm ">
                  <strong>Price:</strong> £{product.price}
                </p>
              )}
              {product.discount && (
                <p className="text-gray-700 mb-2 text-sm">
                  <strong>Discount:</strong> {product.discount}%
                </p>
              )}
              {product.availabilityStatus && (
                <p className="text-gray-700 mb-2 text-sm">
                  <strong>Availability:</strong> {product.availabilityStatus}
                </p>
              )}
            </Card>
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
