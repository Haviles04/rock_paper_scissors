import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { playerSelect } from "../../features/playerChoiceSlice";
import { compSelect } from "../../features/compChoiceSlice";

export default function Choices() {
  const choices = useSelector((state) => state.choices.value);
  const hardMode = useSelector((state) => state.hardMode.value);
  const dispatch = useDispatch();

  const setComputerChoice = () => {
    const choiceIndex = hardMode
      ? Math.floor(Math.random() * 5)
      : Math.floor(Math.random() * 3);
    return choices[choiceIndex];
  };

  const handleChange = (choice) => {
    dispatch(playerSelect(choice));
    setTimeout(
      () => dispatch(compSelect(setComputerChoice())),
      Math.floor(Math.random() * 4000)
    );
  };

  return (
    <div className="flex justify-center align-center h-[300px]">
      <div
        className={
          hardMode
            ? "bg-hard bg-no-repeat bg-center bg-[length:60%] grid grid-cols-fiveItem justify-items-center grid-rows-test  h-[350px] md:grid-cols-fiveItemMD md:grid-rows-fiveItem md:bg-[length:70%]"
            : " bg-easy bg-no-repeat bg-center bg-[length:50%] grid justify-items-center gap-x-[75px] grid-cols-5 grid-rows-2 w-[350px] h-[300px]"
        }
      >
        {choices.map((choice) => (
          <div
            key={choice.id}
            className={`col-start-${choice.col}  row-start-${
              choice.row
            } hover:scale-95 row m-5 ${
              hardMode ? "w-[94px] h-[94px] md:w-[149px] md:h-[149px]" : "w-[114px] h-[114px]"
            } rounded-full shadow-[0px_8px_${choice.shadow}]`}
          >
            <button
              className={`bg-gray-100 flex justify-center items-center ${
                hardMode ? "w-[95px] h-[95px] md:w-[150px] md:h-[150px]" : "w-[115px] h-[115px]"
              } p-5 rounded-full shadow-btnInner border-solid border-[9px] md:border-[15px] border-[${
                choice.border
              }]`}
              onClick={() => handleChange(choice)}
            >
              <img alt={choice.name} src={choice.image} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
