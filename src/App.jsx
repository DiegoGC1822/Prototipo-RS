import { useState } from "react";
import personIcon from "./assets/person.svg";
import moneyIcon from "./assets/money.svg";
import moneyEmpty from "./assets/money-empty.svg";
import personEmpty from "./assets/person-empty.svg";
import { Resource } from "./components/Resource";

function App() {
  const [money, setMoney] = useState(100); // Recurso de dinero al 100%
  const [people, setPeople] = useState(100); // Recurso de personas al 100%

  const handleDecreaseMoney = () => {
    if (money > 0) setMoney(money - 10);
  };

  const handleDecreasePeople = () => {
    if (people > 0) setPeople(people - 10);
  };

  return (
    <div
      className="resource-container"
      style={{
        backgroundColor: "#C26464",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
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
    </div>
  );
}

export default App;
