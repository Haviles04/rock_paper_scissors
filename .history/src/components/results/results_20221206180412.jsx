import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { setWinner } from "../../features/winnerSlice";


export default function Results() {
  const playerChoice = useSelector((state) => state.playerChoice.value);
  const compChoice = useSelector((state) => state.compChoice.value);
 const dispatch = useDispatch();
  const selections = [playerChoice, compChoice];

  useEffect(() => {
    if(playerChoice.beats.includes(compChoice.name)){
        dispatch(setWinner('player'))
    } else if (playerChoice.name === compChoice.name){
        dispatch(setWinner('tie'))
    } else {
        dispatch(setWinner('comp'));
    }
  }, [playerChoice,compChoice,dispatch])
  
  return (
    <div className="flex text-center flex-row justify-around w-screen">
      {selections.map((selection, index) => (
        selection ? (
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
        </div>)
        : 
        (
        <div >
        <div className="opacity-75 mb-4 block bg-sky-100 rounded-full w-[115px] h-[115px]"></div>
        <span className="text-md text-white">
           Choosing...
          </span></div>)
      ))}
      
    </div>

  );
}
