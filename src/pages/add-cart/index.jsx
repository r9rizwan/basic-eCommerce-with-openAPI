import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCartItem, removeFromCart } from "../../store/slices/cart-slice";

function AddCartPage() {
  const { cart } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const [quantities, setQuantities] = useState({});
  const [removeQuantities, setRemoveQuantities] = useState({});

  useEffect(() => {
    const newQuantities = cart.reduce((acc, item) => {
      acc[item.id] = item.quantity;
      return acc;
    }, {});
    setQuantities(newQuantities);
    setRemoveQuantities(newQuantities); // Initialize with current quantities
  }, [cart]);

  const handleQuantityChange = (id, quantity) => {
    setQuantities({ ...quantities, [id]: quantity });
  };

  const handleRemoveQuantityChange = (id, quantity) => {
    setRemoveQuantities({ ...removeQuantities, [id]: quantity });
  };

  const handleUpdateCart = (id) => {
    dispatch(updateCartItem({ id, quantity: quantities[id] }));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({ id, quantity: removeQuantities[id] }));
  };

  const renderCart = () => {
    return cart.map((item) => (
      <div
        key={item.id}
        className="bg-white rounded-lg shadow-lg p-4 flex flex-col gap-4">
        <img
          src={item.thumbnail}
          className="object-contain h-48 w-full border-b border-gray-200 mb-4"
          alt={item.title}
        />
        <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
        <p className="text-sm text-gray-600">
          Price: <span className="font-semibold">£{item.price}</span>
        </p>
        <div className="flex gap-2 items-center text-sm">
          <p>
            Stock: <span className="font-semibold">{item.stock}</span>
          </p>
          <span
            className={`inline-block text-sm px-2 py-1 rounded-full ${
              item.availabilityStatus === "Low Stock"
                ? "bg-yellow-500 text-white"
                : "bg-green-500 text-white"
            }`}>
            {item.availabilityStatus}
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label className="font-medium text-sm text-gray-700">
              Quantity:
            </label>
            <select
              value={quantities[item.id] || 1}
              onChange={(e) =>
                handleQuantityChange(item.id, Number(e.target.value))
              }
              className="border border-gray-300 rounded p-1 text-sm bg-white text-gray-800">
              {[...Array(item.stock).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </select>
            <button
              onClick={() => handleUpdateCart(item.id)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-sm">
              Update
            </button>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium text-sm text-gray-700">Remove:</label>
            <select
              value={removeQuantities[item.id] || 1}
              onChange={(e) =>
                handleRemoveQuantityChange(item.id, Number(e.target.value))
              }
              className="border border-gray-300 rounded p-1 text-sm bg-white text-gray-800">
              {[...Array(removeQuantities[item.id] || 1).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </select>
            <button
              onClick={() => handleRemoveFromCart(item.id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-sm">
              Remove
            </button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {renderCart()}
    </div>
  );
}

export default AddCartPage;
