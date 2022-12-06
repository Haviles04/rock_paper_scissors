import React from "react";
import { useSelector } from "react-redux";
import Score from "../Score/Score";

export default function Header() {
   const hardMode = useSelector((state) => state.hardMode.value)
  
    return (
    <div className="flex justify-between">
        <span className="text-white leading-3 text-xs flex flex-col w-[50px] h-[75px]">{hardMode ? "Rock Paper Scissors Lizard Spock" : "Rock Paper Scissors" }</span>
      <Score />
    </div>
  );
}
