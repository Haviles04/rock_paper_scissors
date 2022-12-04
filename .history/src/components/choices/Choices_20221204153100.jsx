import React from "react";
import { useSelector } from "react-redux";

export default function Choices() {
  const choices = useSelector((state) => state.choices.value);
  const hardMode = useSelector((state) => state.hardMode.value)
  
  return (
    <div style={hardMode ? {gridTemplateColumns: '5' , gridTemplateRows: '3'} : {gridTemplateColumns: '3' , gridTemplateRows: '2'} }>
      {choices.map((choice) => (
        <div
          key={choice.id}
          className="m-5 w-[99px] h-[99px] rounded-full"
          style={{ boxShadow: `0px 7px ${choice.shadow}`, gridColumn:`${choice.col}`, gridRowStart:`${choice.row}`}}
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
