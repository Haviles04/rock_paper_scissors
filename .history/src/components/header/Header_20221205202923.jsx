import React from "react";
import Score from "../Score/Score";

export default function Header() {
  return (
    <div className="flex justify-between">
      <Score />
    </div>
  );
}
