import React from "react";
import { useDispatch } from "react-redux";
import { setShowRules } from "../../features/showRulesSlice";
import { useSelector } from "react-redux";

export default function RulesButton() {
  const showRules = useSelector((state) => state.showRules.value);
  const dispatch = useDispatch();

  return (
    <div className="mt-5 flex justify-center w-screen">
      <button
        className=" hover:scale-90 hover:bg-white hover:text-blue-900 rounded-lg border-2 border-zinc-400 font-semibold text-zinc-200 text-lg w-[128px] h-[40px] md:ml-[80%]"
        onClick={() => dispatch(setShowRules(showRules))}
      >
        Rules
      </button>
    </div>
  );
}
