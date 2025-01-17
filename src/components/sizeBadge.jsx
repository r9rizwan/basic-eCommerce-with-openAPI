export const SizeBadge = ({ size }) => {
  return (
    <div
      className="size-11 rounded-full bg-gray-200 flex justify-center items-center font-semibold hover:bg-gray-300 transition"
      role="button">
      {size}
    </div>
  );
};
