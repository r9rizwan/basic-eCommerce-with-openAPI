import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "../../components";
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
        <div key={product.id} className="w-full h-full relative">
          <Card {...product} />
          <div className="absolute top-2 right-2">
            <HeartIconWrapper item={product} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default FavoriteListPage;
