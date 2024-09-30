import { MainLayout } from "../layouts/MainLayout";
import { PanelResources } from "../components/PanelResources";
import { Scenario } from "../components/Scenario";
import ud from "../assets/university-day.svg";

export const Game = () => {
  return (
    <MainLayout
      background={ud}
      color="#C26464"
    >
      <PanelResources />
      <Scenario />
    </MainLayout>
  );
};
