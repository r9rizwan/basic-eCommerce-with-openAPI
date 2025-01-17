import { Link } from "react-router-dom";

export const Card = ({ id, children }) => {
  return (
    <Link
      to={`/products/${id}`}
      className="h-full block border rounded-lg shadow-lg p-4 mb-6 hover:scale-[1.03] transition">
      {children}
    </Link>
  );
};
