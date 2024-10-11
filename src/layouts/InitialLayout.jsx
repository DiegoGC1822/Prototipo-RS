import un from "../assets/backgrounds/university-night.svg";
import conf from "../assets/others/configuration.svg";

export const InitialLayout = ({ tittle, children, confb, ret, mt }) => {
  return (
    <div
      className="relative flex h-screen flex-col items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${un})`,
      }}
    >
      <h1 className="mt-16 text-center font-p text-8xl text-white">{tittle}</h1>
      <div
        className="flex h-[60%] w-[40%] flex-col items-center"
        style={{ marginTop: mt }}
      >
        {children}
      </div>
      {confb && (
        <div className="absolute bottom-5 right-10 rounded-3xl bg-[#d77b74] p-2">
          <img src={conf} alt="configuration" className="h-[50px] w-[50px]" />
        </div>
      )}
      {ret && (
        <button className="absolute bottom-5 left-10 bg-[#d77b74] p-4 font-p text-2xl text-white">
          Volver
        </button>
      )}
    </div>
  );
};
