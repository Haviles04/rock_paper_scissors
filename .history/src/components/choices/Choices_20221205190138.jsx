import React from "react";
import { useSelector } from "react-redux";

export default function Choices() {
  const choices = useSelector((state) => state.choices.value);
  const hardMode = useSelector((state) => state.hardMode.value);
  

  return (
    <div className="flex justify-center">
    <div
      className={
        hardMode
          ? "bg-hard bg-no-repeat bg-center bg-[length:50%] grid grid-cols-5 gap-0 justify-items-center grid-rows-3 w-[80%] h-[400px]"
          : " bg-easy bg-no-repeat bg-center bg-[length:50%] grid justify-items-center gap-x-[75px] grid-cols-5 grid-rows-2 w-screen h-[300px]"
      }
    >
      {choices.map((choice) => (
        <div
          key={choice.id}
          className={`col-start-${choice.col}  row-start-${choice.row} row m-5 w-[114px] h-[114px] rounded-full shadow-[0px_8px_${choice.shadow}]`}
        >
          
          <button
            className={`bg-gray-100 flex justify-center items-center w-[115px] h-[115px] p-5 rounded-full shadow-btnInner border-solid border-[10px] border-[${choice.border}]`}
          >
            <img alt={choice.name} src={choice.image} />
          </button>
        </div>
      ))}
    </div>
    </div>
  );
}
