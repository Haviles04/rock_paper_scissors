import React from "react";
import { useSelector } from "react-redux";

export default function Results() {
  const playerChoice = useSelector((state) => state.playerChoice.value);
  const compChoice = useSelector((state) => state.compChoice.value);
  
  
  
  
  let selections = [playerChoice];
    setTimeout(() => {selections = [playerChoice, compChoice]}, 6000) 

  

  return (
    <div className="flex flex-row justify-around w-screen">
      {selections.map((selection, index) => (
        <div
          key={selection.id}
          className={`
w-[114px] h-[114px] text-center
rounded-full shadow-[0px_8px_${selection.shadow}]`}
        >
          <div
            className={`bg-gray-100 flex justify-center items-center 
 w-[115px] h-[115px]
p-5 rounded-full shadow-btnInner mb-4 border-solid border-[9px] border-[${selection.border}]`}
          >
            <img alt={selection.name} src={selection.image} />
          </div>
          <span className="text-md text-white">
            {index === 0 ? "You Picked" : "The House Picked"}
          </span>
        </div>
      ))}
    </div>
  );
}
