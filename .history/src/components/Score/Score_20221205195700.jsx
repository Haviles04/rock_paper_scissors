import React from "react";
import { useSelector } from "react-redux";

export default function Score() {
  const playerScore = useSelector((state) => state.playerScore.value);

  return (
    <div className="bg-white h-[75px] w-[75px]">
      <span className="text-xl">Score</span>
      <span className="text-5xl">{playerScore}</span>
    </div>
  );
}
