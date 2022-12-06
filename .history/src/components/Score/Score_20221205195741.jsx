import React from "react";
import { useSelector } from "react-redux";

export default function Score() {
  const playerScore = useSelector((state) => state.playerScore.value);

  return (
    <div className="flex flex-col justify- bg-white h-[75px] w-[75px]">
      <span className="text-sm">Score</span>
      <span className="text-5xl">{playerScore}</span>
    </div>
  );
}