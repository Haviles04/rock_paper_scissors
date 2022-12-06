import React from "react";
import { useSelector } from "react-redux";

export default function Results() {
  const playerChoice = useSelector((state) => state.playerChoice.value);
  const hardMode = useSelector((state) => state.hardMode.value);
  const choices = useSelector((state) => state.choices.value);
  let compChoice;

  const setComputerChoice = () => {
    const numOfChoices = hardMode ? 5 : 3;
    const randomNum = Math.floor(Math.random() * numOfChoices);
    compChoice = choices[randomNum];
  };

  setComputerChoice();
  console.log(choices);
  console.log(compChoice);

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
       p-5 rounded-full shadow-btnInner mb-2 border-solid border-[9px] border-[${playerChoice.border}]`}
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
       p-5 rounded-full shadow-btnInner border-solid border-[9px] border-[${compChoice.border}]`}
          >
            <img alt={compChoice.name} src={compChoice.image} />
    
    </div>
    <span className="text-md text-white">The House Picked</span>
    </div>
    </div>
  );
}
