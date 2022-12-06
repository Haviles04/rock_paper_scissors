import React from "react";
import Score from "../Score/Score";

export default function Header() {
  return (
    <div className="flex justify-between">
        <span>{hardMode ? "Rock Paper Scissors" : "Rock Paper Scissors Lizard Spock"}</span>
      <Score />
    </div>
  );
}
