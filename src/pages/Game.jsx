import { GameLayout } from "../layouts/GameLayout";
import { PanelResources } from "../components/PanelResources";
import { Scenario } from "../components/Scenario";

export const Game = () => {
  return (
    <GameLayout>
      <PanelResources />
      <Scenario />
    </GameLayout>
  );
};
