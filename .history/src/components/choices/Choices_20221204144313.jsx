import React from "react";
import { useSelector } from "react-redux";

export default function Choices() {
  const choices = useSelector((state) => state.choices.value);

  return (
    <div className="flex justify-center w-screen flex-wrap">
      {choices.map((choice) => (
        <div
          key={choice.id}
          className={`w-[150px] h-[150px] flex justify-center items-center rounded-full`}
          style={{ boxShadow: `${choice.shadow}`}}
        >
          <button
            className={`bg-gray-100 flex justify-center items-center w-[150px] h-[100px] p-5 rounded-full`}
            style={{border: `10px solid ${choice.border}`,}}
          >
            <img alt={choice.name} src={choice.image} />
          </button>
        </div>
      ))}
    </div>
  );
}
