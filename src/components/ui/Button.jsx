export const Button = ({ children, width }) => {
  const widthClass = width === "half" ? "50%" : "100%";

  return (
    <button
      className="my-2 cursor-pointer rounded-md border-none bg-[#d77b74] p-4 font-p text-4xl text-white transition-colors duration-300 hover:bg-[#b95f5b]"
      style={{ width: widthClass }}
    >
      {children}
    </button>
  );
};
