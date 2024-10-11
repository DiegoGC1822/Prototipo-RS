import student from "../assets/characters/student.svg";
import { useResources } from "../store/useResources";
import om from "../assets/finals/outOfMoney.svg";
import str from "../assets/finals/strike.svg";

export const Scenario = () => {
  const { money, people } = useResources();

  let final = null;

  if (money === 0) {
    final = {
      name: "Sin dinero",
      img: om,
      reason: "¡Se acabo el presupuesto!",
    };
  }

  if (people === 0) {
    final = {
      name: "Sin personas",
      img: str,
      reason: "¡Se alza una huelga!",
    };
  }

  return (
    <section className="flex h-[55%] flex-col items-center justify-center bg-[#D9D9D9]">
      <h2 className="font-s text-2xl text-[#BA6060]">
        {final ? final.reason : "¡Exigimos mayoneza en el comedor!"}
      </h2>
      <div className="mt-3 flex h-[70%] w-[65%] items-end justify-center rounded-[10px] bg-[#BA6060]">
        <img
          className="h-4/5 w-full"
          src={final ? final.img : student}
          alt={final ? final.name : "student"}
        />
      </div>
      <h2 className="font-s text-2xl text-[#BA6060]">
        {final ? "Despedido" : "Estudiante"}
      </h2>
    </section>
  );
};
