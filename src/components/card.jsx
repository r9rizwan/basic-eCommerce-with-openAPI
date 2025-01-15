import { Link } from "react-router-dom";

// src/components/Card.jsx
export const Card = (props) => {
  const {
    id,
    thumbnail,
    title,
    price,
    discount,
    availabilityStatus,
    description,
    ...otherProps
  } = props;

  return (
    <Link
      to={`/products/${id}`}
      className="h-full block border rounded-lg shadow-lg p-4 mb-6 hover:scale-[1.03] transition ">
      {thumbnail && (
        <img src={thumbnail} alt={title} className="w-full object-fill mb-4" />
      )}
      {title && <h2 className="text-xl font-bold mb-2">{title}</h2>}
      {price && (
        <p className="text-gray-700 mb-2">
          <strong>Price:</strong> ${price}
        </p>
      )}
      {discount && (
        <p className="text-gray-700 mb-2">
          <strong>Discount:</strong> {discount}%
        </p>
      )}
      {availabilityStatus && (
        <p className="text-gray-700 mb-2">
          <strong>Availability:</strong> {availabilityStatus}
        </p>
      )}
      {/* {description && (
        <p className="text-gray-700 mb-2">
          <strong>Description:</strong> {description}
        </p>
      )} */}
      {/* {Object.keys(otherProps).map((key) => (
        <p className="text-gray-700 mb-2" key={key}>
          <strong>{key}:</strong> {otherProps[key]}
        </p>
      ))} */}
    </Link>
  );
};
