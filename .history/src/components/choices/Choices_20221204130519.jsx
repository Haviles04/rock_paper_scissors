import React from "react";
import { useSelector } from "react-redux";

export default function Choices() {
  const choices = useSelector((state) => state.choices.value);

  return (
    <div className="flex justify-center w-screen">
      {choices.map((choice) => (
        <div key={choice.id} className="w-[150px] h-[150px] ">
          <button className=" flex justify-center items-center w-[100px] h-[100px] p-5 flex justify-center border-2 border-neutral-900 rounded-full">
            <img alt={choice.name} src={choice.image} />
          </button>
        </div>
      ))}
    </div>
  );
}
