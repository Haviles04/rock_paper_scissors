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
          ? "grid grid-cols-5 justify-items-center grid-rows-3  h-500px"
          : " bg-easy bg-no-repeat bg-center bg-[length:50%] grid justify-items-center gap-x-[75px] grid-cols-5 grid-rows-2 w-[375px] h-[300px]"
      }
    >
      {choices.map((choice) => (
        <div
          key={choice.id}
          className={`col-start-${choice.col}  row-start-${choice.row} row m-5 w-[115px] h-[115px] rounded-full`}
          style={{
            boxShadow: `0px 7px ${choice.shadow}`,
          }}
        >
          
          <button
            className="bg-gray-100 flex justify-center items-center w-[115px] h-[115px] p-5 rounded-full"
            style={{
              border: `10px solid ${choice.border}`,
              boxShadow: "inset 0px 6px lightGrey",
            }}
          >
            <img alt={choice.name} src={choice.image} />
          </button>
        </div>
      ))}
    </div>
    </div>
  );
}
