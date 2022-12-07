import React from "react";
import { useSelector } from "react-redux";
import Score from "../Score/Score";

export default function Header() {
  const hardMode = useSelector((state) => state.hardMode.value);

  return (
    <div className="flex justify-center max-w-[500px] self-center pt-10 ">
      <div className="flex flex-row justify-between items-center w-[80%] p-2 border-2 rounded-lg border-gray-500 ">
        <span className="pl-3 text-white leading-3 text-xs flex items-center w-[50px] h-[60px]">
          {hardMode
            ? "Rock Paper Scissors Lizard Spock"
            : "Rock Paper Scissors"}
        </span>
        <Score />
      </div>
    </div>
  );
}
