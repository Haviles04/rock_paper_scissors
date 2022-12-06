import React from "react";
import { useSelector } from "react-redux";

export default function Results() {
  const playerChoice = useSelector((state) => state.playerChoice.value);

  return (
    <div className="flex flex-row h-[300px]">
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
    </div>
    </div>
  );
}
