import React from "react";
import { useSelector } from "react-redux";

export default function Mode() {
  const gameMode = useSelector((state) => state.gameMode.value);

  return (
<div class="flex justify-center">
  <div class="form-check form-switch">
    <input class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
    <label class="form-check-label inline-block text-gray-800" for="flexSwitchCheckDefault">Default switch checkbox input</label>
  </div>
</div>
  );
}
