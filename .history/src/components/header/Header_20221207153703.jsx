import React from "react";
import { useSelector } from "react-redux";
import Score from "../Score/Score";

export default function Header() {
  const hardMode = useSelector((state) => state.hardMode.value);

  return (
    <div className="flex justify-center w-screen self-center pt-10 md:h-[175px] md:w-[875px]">
      <div className="flex flex-row justify-between items-center w-[80%] p-2 border-2 rounded-lg md:rounded-2xl border-gray-500 ">
        <span className="pl-3 text-white leading-3 text-xs md:text-2xl md:text-bold md:leading-none flex items-center w-[50px] h-[60px]">
          {hardMode
            ? "Rock Paper Scissors Lizard Spock"
            : "Rock Paper Scissors"}
        </span>
        <Score />
      </div>
    </div>
  );
}
