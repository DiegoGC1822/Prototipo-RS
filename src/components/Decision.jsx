import { useResources } from "../store/useResources";

export const Desicion = () => {
  const { money, people, decreasePeople, decreaseMoney, setMoney, setPeople } =
    useResources();

  const outOfResources = () => {
    if (money === 0 || people === 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div
      style={{
        height: "16%",
        display: "flex",
        justifyContent: "space-around",
        margin: "12px 0",
      }}
    >
      <button
        style={{
          width: "40%",
          backgroundColor: money === 0 || people === 0 ? "red" : "#D9D9D9",
          border: "none",
          borderRadius: "10px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
          transition:
            "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0px 6px 12px rgba(0, 0, 0, 0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.3)";
        }}
        onClick={() => {
          decreaseMoney(10);
        }}
      >
        {outOfResources() ? (
          <h3
            style={{
              textAlign: "center",
              fontFamily: "Inria Sans",
              fontSize: "20px",
              color: "white",
            }}
          >
            Volver al menu
          </h3>
        ) : (
          <h3 style={{ textAlign: "center", fontFamily: "Inria Sans" }}>
            Que les cierre el segundo piso dicen
          </h3>
        )}
      </button>
      <button
        style={{
          width: "40%",
          backgroundColor: money === 0 || people === 0 ? "green" : "#D9D9D9",
          border: "none",
          borderRadius: "10px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
          transition:
            "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0px 6px 12px rgba(0, 0, 0, 0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.3)";
        }}
        onClick={() => {
          if (outOfResources()) {
            setMoney(100);
            setPeople(100);
          } else {
            decreasePeople(10);
          }
        }}
      >
        {outOfResources() ? (
          <h3
            style={{
              textAlign: "center",
              fontFamily: "Inria Sans",
              fontSize: "20px",
              color: "white",
            }}
          >
            Jugar otra partida
          </h3>
        ) : (
          <h3 style={{ textAlign: "center", fontFamily: "Inria Sans" }}>
            Comanse esta mayoneza
          </h3>
        )}
      </button>
    </div>
  );
};
