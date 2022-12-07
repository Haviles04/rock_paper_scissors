import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setWinner } from "../../features/winnerSlice";
import { playerLost } from "../../features/playerScoreSlice";
import { playerWin } from "../../features/playerScoreSlice";
import { resetWinner } from "../../features/winnerSlice";
import { playerReset } from "../../features/playerChoiceSlice";
import { compReset } from "../../features/compChoiceSlice";


export default function Results() {
  const playerChoice = useSelector((state) => state.playerChoice.value);
  const compChoice = useSelector((state) => state.compChoice.value);
  const winner = useSelector((state) => state.winner.value);
  const dispatch = useDispatch();
  const selections = [playerChoice, compChoice];

  //sets winner anytime player or computer choice is choosen
  useEffect(() => {
   compChoice && declareWinner();
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [compChoice, dispatch]);

  const declareWinner = () => {
    if (playerChoice.beats.includes(compChoice.name)) {
      dispatch(setWinner("You Won!"));
      dispatch(playerWin());
    } else if (playerChoice.name === compChoice.name) {
      dispatch(setWinner("Tied!"));
    } else {
      dispatch(setWinner("The Computer Won!"));
      dispatch(playerLost());
    } 
  }

  const handleClick = () => {
    dispatch(playerReset());
    dispatch(compReset());
    dispatch(resetWinner());
  };

  return (
    <div className="flex text-center flex-col h-[300px] min-w-[370px] md:max-w-[500px] self-center">
      <div className="grid grid-cols-5 justify-between">
        {selections.map((selection, index) =>
          selection ? (
            <div
              key={selection.name}
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
      <div className="text-center mt-20 text-white h-[124px]">
        {winner && (
          <div>
            <div className="text-4xl">{winner}</div>{" "}
            <button
              onClick={() => handleClick()}
              className="hover:scale-90 mt-10 w-[50%] border-2 rounded-lg p-2"
            >
              Play Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
