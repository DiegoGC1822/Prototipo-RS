import un from "../assets/backgrounds/university-night.svg";

export const InitialLayout = ({ tittle, children }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${un})`,
        backgroundSize: "cover",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <h1
        style={{
          fontFamily: "Inknut Antiqua",
          color: "white",
          fontSize: "100px",
          textAlign: "center",
          marginTop: "0",
        }}
      >
        {tittle}
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {children}
      </div>
    </div>
  );
};
