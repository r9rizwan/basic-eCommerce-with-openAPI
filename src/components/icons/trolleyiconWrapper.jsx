import { useSelector } from "react-redux";
import React from "react";
import { Trolley } from "./trolley";

export function TrolleyWrapper(props) {
  const { newCount } = useSelector((store) => store.cart);

  console.log("Cart Items Count:", newCount);

  return (
    <div className="relative inline-block">
      <Trolley {...props} />
      {newCount > 0 && (
        <span className="text-xs bg-red-500 text-white rounded-full  absolute -top-2 -right-3 flex items-center justify-center min-w-[1.25rem] h-5">
          {newCount}
        </span>
      )}
    </div>
  );
}
