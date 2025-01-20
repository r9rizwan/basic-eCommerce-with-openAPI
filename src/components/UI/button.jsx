export const Button = ({ children }) => {
  return (
    <button className="bg-primary text-background rounded px-7 h-14 flex justify-center items-center hover:bg-primary/90 transition active:bg-primary/80">
      {children}
    </button>
  );
};
