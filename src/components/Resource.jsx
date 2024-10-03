export const Resource = ({ resource }) => {
  return (
    <div
      className="resource"
      style={{ position: "relative", paddingTop: "10px" }}
    >
      <img
        src={resource.icon}
        alt={resource.name}
        style={{
          height: "90px",
          width: "90px",
          clipPath: `inset(${100 - resource.state}% 0 0 0)`,
          position: "absolute",
          transition: "clip-path 0.3s ease",
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
  );
};
