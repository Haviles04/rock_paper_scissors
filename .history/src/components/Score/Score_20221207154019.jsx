import React from "react";
import { useSelector } from "react-redux";

export default function Score() {
  const playerScore = useSelector((state) => state.playerScore.value);

  return (
    <div className="flex flex-col justify-center items-center rounded bg-white h-[75px] w-[90px] md:h-[115px] md:w-[130px]">
      <span className="text-xs md:text-lg text-[#2A46C0] tracking-wide">Score</span>
      <span className="text-5xl text-[#3B4363]">{playerScore}</span>
    </div>
  );
}
