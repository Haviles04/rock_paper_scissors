import React from "react";
import { useSelector } from "react-redux";

export default function Results() {
  const playerSelect = useSelector((state) => state.playerChoice.value);

  return (
    <div
      className={`hover:scale-95 row m-5
     w-[114px] h-[114px]
     rounded-full shadow-[0px_8px_${playerSelect.shadow}]`}
    >
      <div
        className={`bg-gray-100 flex justify-center items-center 
        w-[115px] h-[115px]
       p-5 rounded-full shadow-btnInner border-solid border-[9px] border-[${playerSelect.border}]`}
      >
        <img alt={playerSelect.name} src={playerSelect.image} />
      </div>
    </div>
  );
}
