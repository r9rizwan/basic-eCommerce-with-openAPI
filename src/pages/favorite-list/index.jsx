import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "../../components/UI";
import HeartIconWrapper from "../../components/icons/heartIconWrapper";
import { resetNewCount } from "../../store/slices/wishlistSlice";

function FavoriteListPage() {
  const dispatch = useDispatch();
  const { wishlist, newCount } = useSelector((state) => state.wishlist);

  useEffect(() => {
    if (newCount > 0) {
      dispatch(resetNewCount());
    }
  }, [newCount, dispatch]);

  return (
    <div className="container grid gap-x-10 gap-y-6 place-items-stretch grid-cols-3 py-10">
      {wishlist?.map((product) => (
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
  );
}

export default FavoriteListPage;
