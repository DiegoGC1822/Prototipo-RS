import student from "../assets/student.svg";

export const Scenario = () => {
  return (
    <>
      <section
        className="scenario"
        style={{
          backgroundColor: "#D9D9D9",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "65%",
        }}
      >
        <h2 style={{ fontFamily: "Inria Sans" }}>
          ¡Exigimos mayonesa en el comedor!
        </h2>
        <div
          className="decision"
          style={{
            backgroundColor: "#904949",
            width: "65%",
            height: "70%",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
          }}
        >
          <img
            src={student}
            alt="student"
            style={{
              height: "80%",
              width: "100%",
            }}
          />
        </div>
        <h2 style={{ fontFamily: "Inria Sans" }}>Estudiante</h2>
      </section>
      <section
        className="dateSurvived"
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontFamily: "Inknut Antiqua", margin: "0" }}>2024</h1>
        <h2 style={{ fontFamily: "Inria Sans", marginTop: "10px" }}>
          2 meses y 3 días ejerciendo
        </h2>
      </section>
    </>
  );
};
