import un from "../assets/backgrounds/university-night.svg";
import conf from "../assets/others/configuration.svg";
import { MainLayout } from "../layouts/MainLayout";
export const Start = () => {
  return (
    <MainLayout background={un} color="#C26464">
      <div className="flex h-1/3 items-center justify-center">
        <img src={conf} alt="configuration" className="h-[50px] w-[50px]" />
      </div>
      <div className="mt-[90px] flex h-[100px] flex-col items-center justify-center font-p leading-tight">
        <h2 className="h-1/3 text-2xl">Año</h2>
        <h1 className="h-2/5 text-3xl">2024</h1>
      </div>
      <button className="mt-[15px] flex h-[15%] w-full items-center justify-center bg-[#5A2F2F] font-s text-2xl text-white duration-300 hover:opacity-85">
        Continuar
      </button>
    </MainLayout>
  );
};
