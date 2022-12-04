import React from "react";
import { useSelector } from "react-redux";

export default function Choices() {
  const choices = useSelector((state) => state.choices.value);

  return (
    <>
      {choices.map((choice) => (
        <div key={choice.id} className="w-[50px] ">
          <button className="m-1 p-5 flex justify-center border-2 border-neutral-900 rounded-full">
            <img alt={choice.name} src={choice.image} />
          </button>
        </div>
      ))}
    </>
  );
}
