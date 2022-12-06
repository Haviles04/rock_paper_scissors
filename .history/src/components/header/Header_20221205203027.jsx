import React from "react";
import { useSelector } from "react-redux";
import Score from "../Score/Score";

export default function Header() {
   const hardMode = useSelector((state) => state.hardMode.value)
  
    return (
    <div className="flex justify-between">
        <span>{hardMode ? "Rock Paper Scissors" : "Rock Paper Scissors Lizard Spock"}</span>
      <Score />
    </div>
  );
}
