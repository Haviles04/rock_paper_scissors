import React from "react";
import { useSelector } from "react-redux";

export default function Choices() {
  const choices = useSelector((state) => state.choices.value);
  const hardMode = useSelector((state) => state.hardMode.value)
  
  return (
    <div className={hardMode ? "grid grid-cols-5 grid-rows-3 w-screen h-500px " : " grid grid-cols-3 grid-rows-2 w-[300px] h-[500px]"}>
      {choices.map((choice) => (
        <div
          key={choice.id}
          className="m-5 w-[125px] h-[125px] rounded-full"
          style={{ boxShadow: `0px 7px ${choice.shadow}`, gridColumnStart:`${choice.col}`, gridRowStart:`${choice.row}` }}
        >
          <button
            className="bg-gray-100 flex justify-center items-center w-[100px] h-[100px] p-5 rounded-full"
            style={{border: `10px solid ${choice.border}`, boxShadow:"inset 0px 6px lightGrey"}}
          >
            <img alt={choice.name} src={choice.image} />
          </button>
        </div>
      ))}
    </div>
  );
}
