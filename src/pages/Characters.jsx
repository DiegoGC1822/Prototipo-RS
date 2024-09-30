import { MainLayout } from "../layouts/MainLayout";
import ua from "../assets/university-night.svg";

export const Characters = () => {
  return (
    <MainLayout
      background={ua}
      color="#110909"
    >
      <div
        style={{
          width: "95%",
          height: "95%",
          backgroundColor: "#231212",
          border: "1px solid white",
          margin: "19px auto",
        }}
      >
        <h1
          style={{
            fontFamily: "Inknut Antiqua",
            color: "white",
            marginLeft: "15px",
            marginTop: "15px",
          }}
        >
          Personajes
        </h1>
      </div>
    </MainLayout>
  );
};
