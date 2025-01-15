import React, { useState } from "react";
import { Card } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { updateCartItem, removeFromCart } from "../../store/slices/cart-slice";

function AddCartPage() {
  const { cart } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const [quantities, setQuantities] = useState(
    cart.reduce((acc, item) => {
      acc[item.id] = item.quantity || 1; // Initialize quantity to current item quantity or 1
      return acc;
    }, {})
  );

  const handleQuantityChange = (id, value) => {
    setQuantities({
      ...quantities,
      [id]: value,
    });
  };

  const handleUpdateCart = (item) => {
    dispatch(updateCartItem({ id: item.id, quantity: quantities[item.id] }));
  };

  const handleRemoveFromCart = (item, quantityToRemove) => {
    dispatch(removeFromCart({ id: item.id, quantity: quantityToRemove }));
  };

  const renderCart = () => {
    return cart.map((item) => (
      <div
        key={item.id}
        className="px-3 py-4 flex flex-col gap-3 w-full h-auto border border-gray-300 shadow rounded-md">
        <img
          src={item.thumbnail}
          className="object-contain h-48 w-full border-b border-gray-300"
          alt={item.title}
        />
        <div className="px-2 tracking-wide">
          <h3 className=" font-semibold text-sm">{item.title}</h3>
          <h6 className="text-md text-sm">
            Only in: <span className="font-semibold">${item.price}</span>
          </h6>
          <div className="flex gap-5 items-center text-sm">
            <p>
              Total Stock Available:{" "}
              <span className="font-semibold">{item.stock}</span>
            </p>
            <p
              className={`text-background inline-block text-sm px-2 py-1 rounded ${
                item.availabilityStatus === "Low Stock"
                  ? "bg-yellow-600"
                  : "bg-primary"
              }`}>
              {item.availabilityStatus}
            </p>
          </div>

          <div className="mt-2 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <label
                htmlFor={`quantity-${item.id}`}
                className="font-medium text-sm">
                Quantity:
              </label>
              <select
                id={`quantity-${item.id}`}
                value={quantities[item.id]}
                onChange={(e) =>
                  handleQuantityChange(item.id, Number(e.target.value))
                }
                className="border border-gray-300 rounded-md p-1 text-sm bg-white text-black">
                {[...Array(item.stock).keys()].map((num) => (
                  <option key={num + 1} value={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </select>
              <button
                onClick={() => handleUpdateCart(item)}
                className="bg-blue-500 text-white px-2 py-1 hover:bg-blue-800 text-sm rounded-md  ">
                Update Cart
              </button>
            </div>
            <div className="flex items-center gap-2">
              <label
                htmlFor={`remove-quantity-${item.id}`}
                className="font-medium text-sm">
                Remove:
              </label>
              <select
                id={`remove-quantity-${item.id}`}
                defaultValue={1}
                className="border border-gray-300 rounded-md p-1 text-sm bg-white text-black">
                {[...Array(quantities[item.id]).keys()].map((num) => (
                  <option key={num + 1} value={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </select>
              <button
                onClick={(e) =>
                  handleRemoveFromCart(
                    item,
                    Number(e.target.previousSibling.value)
                  )
                }
                className="bg-red-500 text-white px-2 py-1 hover:bg-red-700 text-sm rounded-md">
                Remove from Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="grid grid-cols-3 gap-x-10 container py-10">
      {renderCart()}
    </div>
  );
}

export default AddCartPage;
