export const MainLayout = ({ children, background, color }) => {
  return (
    <div
      className="game-layout"
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div
        className="game-space"
        style={{
          backgroundColor: color,
          height: "100%",
          width: "35%",
        }}
      >
        {children}
      </div>
    </div>
  );
};
