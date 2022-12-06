import React from "react";
import { useSelector } from "react-redux";

export default function Results() {
  const playerChoice = useSelector((state) => state.playerChoice.value);
  
  

  return (
    <div className="flex flex-row justify-around w-screen">
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
    </div>
    <div
          className={`
     w-[114px] h-[114px] text-center
     rounded-full shadow-[0px_8px_${compChoice.shadow}]`}
        >
    <div
            className={`bg-gray-100 flex justify-center items-center 
        w-[115px] h-[115px]
       p-5 rounded-full shadow-btnInner mb-4 border-solid border-[9px] border-[${compChoice.border}]`}
          >
            <img alt={compChoice.name} src={compChoice.image} />
    
    </div>
    <span className="text-md text-white">The House Picked</span>
    </div>
    </div>
  );
}
