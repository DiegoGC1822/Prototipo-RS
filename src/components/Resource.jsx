export const Resource = ({ resource }) => {
  return (
    <div
      className="resource-control"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div
        className="resource"
        style={{ position: "relative", paddingTop: "20px" }}
      >
        <img
          src={resource.icon}
          alt={resource.name}
          style={{
            height: "90px",
            width: "90px",
            clipPath: `inset(${100 - resource.state}% 0 0 0)`,
            position: "absolute",
          }}
        />
        <img
          src={resource.iconEmpty}
          alt={resource.name}
          style={{
            height: "90px",
            width: "90px",
          }}
        />
      </div>
      <button
        className="btn"
        onClick={resource.decrease}
      >
        -10
      </button>
    </div>
  );
};
