import { useState } from "react";
import moneyIcon from "../assets/resources/money.svg";
import moneyEmpty from "../assets/resources/money-empty.svg";
import personIcon from "../assets/resources/person.svg";
import personEmpty from "../assets/resources/person-empty.svg";
import { Resource } from "./Resource";

export const PanelResources = () => {
  const [money, setMoney] = useState(100);
  const [people, setPeople] = useState(100);

  const handleDecreaseMoney = () => {
    if (money > 0) setMoney(money - 10);
  };

  const handleDecreasePeople = () => {
    if (people > 0) setPeople(people - 10);
  };

  return (
    <section style={{ display: "flex", justifyContent: "space-around" }}>
      <Resource
        resource={{
          name: "Dinero",
          icon: moneyIcon,
          iconEmpty: moneyEmpty,
          state: money,
          decrease: handleDecreaseMoney,
        }}
      />
      <Resource
        resource={{
          name: "Persona",
          icon: personIcon,
          iconEmpty: personEmpty,
          state: people,
          decrease: handleDecreasePeople,
        }}
      />
    </section>
  );
};
