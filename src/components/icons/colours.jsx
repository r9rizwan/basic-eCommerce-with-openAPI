export const ColorBadge = ({ color, ...props }) => {
  console.log("Color class applied:", `size-5 rounded-full ${color}`);
  return (
    <div className={`size-5 rounded-full ${color}`} role="button" {...props} />
  );
};
