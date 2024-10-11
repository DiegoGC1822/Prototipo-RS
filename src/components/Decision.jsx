import { useResources } from "../store/useResources";

export const Desicion = () => {
  const { money, people, decreasePeople, decreaseMoney, setMoney, setPeople } =
    useResources();

  const outOfResources = () => {
    return money === 0 || people === 0;
  };

  return (
    <div className="my-3 flex h-1/6 justify-around">
      <button
        className="w-2/5 rounded-lg border-none shadow-[0px_4px_8px_rgba(0,0,0,0.3)] transition duration-300 ease-in-out hover:scale-105 hover:shadow-[0px_6px_12px_rgba(0,0,0,0.4)]"
        style={{
          backgroundColor: `${outOfResources() ? "red" : "#D9D9D9"}`,
        }}
        onClick={() => {
          decreaseMoney(10);
        }}
      >
        {outOfResources() ? (
          <h3 className="text-center font-s text-xl font-bold text-white">
            Volver al menu
          </h3>
        ) : (
          <h3 className="text-center font-s font-bold">
            Que les cierre el segundo piso dicen
          </h3>
        )}
      </button>
      <button
        className="w-2/5 rounded-lg border-none shadow-[0px_4px_8px_rgba(0,0,0,0.3)] transition duration-300 ease-in-out hover:scale-105 hover:shadow-[0px_6px_12px_rgba(0,0,0,0.4)]"
        style={{
          backgroundColor: `${outOfResources() ? "green" : "#D9D9D9"}`,
        }}
        onClick={() => {
          if (outOfResources()) {
            setMoney(100);
            setPeople(100);
          } else {
            decreasePeople(10);
          }
        }}
      >
        {outOfResources() ? (
          <h3 className="text-center font-s text-xl font-bold text-white">
            Jugar otra partida
          </h3>
        ) : (
          <h3 className="text-center font-s font-bold">
            Comanse esta mayoneza
          </h3>
        )}
      </button>
    </div>
  );
};
