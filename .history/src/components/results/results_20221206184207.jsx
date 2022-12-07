import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setWinner } from "../../features/winnerSlice";

export default function Results() {
  const playerChoice = useSelector((state) => state.playerChoice.value);
  const compChoice = useSelector((state) => state.compChoice.value);
  const winner = useSelector((state) => state.winner.value);
  const dispatch = useDispatch();
  const selections = [playerChoice, compChoice];

  //sets winner anytime player or computer choice is choosen
  useEffect(() => {
    if (compChoice && playerChoice.beats.includes(compChoice.name)) {
      dispatch(setWinner("You Won!"));
    } else if (compChoice && playerChoice.name === compChoice.name) {
      dispatch(setWinner("Tied!"));
    } else if (compChoice && compChoice.beats.includes(playerChoice.name)) {
      dispatch(setWinner("The Computer Won!"));
    }  else {
        return;
    }
  }, [playerChoice, compChoice, dispatch]);

  return (
    <div>
    <div className="flex text-center justify-around w-screen">
      {selections.map((selection, index) =>
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
          </div>
        ) : (
          <div>
            <div className="opacity-75 mb-4 block bg-sky-100 rounded-full w-[115px] h-[115px]"></div>
            <span className="text-md text-white">Choosing...</span>
          </div>
          )
      )}
      </div>
      <div className="block text-center">
      {winner && <div>{winner}</div>}
      </div>
    </div>
  );
}
