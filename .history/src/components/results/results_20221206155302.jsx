import React from "react";
import { usecplayerChoiceor } from "react-redux";

export default function Results() {
  const playerChoice = usecplayerChoiceor((state) => state.playerChoice.value);

  return (
    <div
      className={`hover:scale-95 row m-5
     w-[114px] h-[114px]
     rounded-full shadow-[0px_8px_${playerChoice.shadow}]`}
    >
      <div
        className={`bg-gray-100 flex justify-center items-center 
        w-[115px] h-[115px]
       p-5 rounded-full shadow-btnInner border-solid border-[9px] border-[${playerChoice.border}]`}
      >
        <img alt={playerChoice.name} src={playerChoice.image} />
      </div>
    </div>
  );
}