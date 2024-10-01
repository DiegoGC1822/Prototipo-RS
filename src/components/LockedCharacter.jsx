import sm from "../assets/others/sm-logo.svg";

export const LockedCharacter = ({ character }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "95%",
        height: "90%",
      }}
    >
      <div
        style={{
          backgroundColor: `${character.unlock ? "#904949" : "#321A1A"}`,
          width: "80%",
          height: "90%",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: `${character.unlock ? "end" : "center"}`,
        }}
      >
        <img
          src={character.unlock ? character.img : sm}
          alt={character.unlock ? character.name : "sm-logo"}
          style={{
            height: "80%",
            width: "100%",
          }}
        />
      </div>
      <h2 style={{ fontFamily: "Inria Sans", color: "white" }}>
        {character.unlock ? character.name : "??????"}
      </h2>
    </div>
  );
};
