import React from "react";
import { useSelector } from "react-redux";
import Score from "../Score/Score";

export default function Header() {
   const hardMode = useSelector((state) => state.hardMode.value)
  
    return (
    <div className="flex justify-between">
        <span className="text-white flex flex-col w-[50px] h-[]">{hardMode ? "Rock Paper Scissors Lizard Spock" : "Rock Paper Scissors" }</span>
      <Score />
    </div>
  );
}
