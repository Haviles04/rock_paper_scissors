import React from "react";
import { useSelector } from "react-redux";

export default function Results() {
  const playerChoice = useSelector((state) => state.playerChoice.value);
  const compChoice = useSelector((state) => state.compChoice.value);

  const selections = [playerChoice, compChoice];

  return (
    <div className="flex flex-row justify-around w-screen">
      {selections.forEach((selection) => {
        <div
          className={`
w-[114px] h-[114px] text-center
rounded-full shadow-[0px_8px_${playerChoice.shadow}]`}
        >
          <div
            className={`bg-gray-100 flex justify-center items-center 
 w-[115px] h-[115px]
p-5 rounded-full shadow-btnInner mb-4 border-solid border-[9px] border-[${playerChoice.border}]`}
          >
            <img alt={playerChoice.name} src={playerChoice.image} />
          </div>
          <span className="text-md text-white">You Picked</span>
        </div>;
      })}
    </div>
  );
}
