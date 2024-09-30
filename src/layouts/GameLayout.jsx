import ud from "../assets/university-day.svg";

export const GameLayout = ({ children }) => {
  return (
    <div
      className="game-layout"
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundImage: `url(${ud})`,
        backgroundSize: "cover",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div
        className="game-space"
        style={{
          backgroundColor: "#C26464",
          height: "100%",
          width: "35%",
        }}
      >
        {children}
      </div>
    </div>
  );
};
