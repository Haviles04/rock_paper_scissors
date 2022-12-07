import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import easyModeRules from "../../assets/images/image-rules.svg";
import hardModeRules from "../../assets/images/image-rules-bonus.svg";
import iconClose from "../../assets/images/icon-close.svg";
import { setShowRules } from "../../features/showRulesSlice";

export default function Rules() {
  const hardMode = useSelector((state) => state.hardMode.value);
  const showRules = useSelector((state) => state.showRules.value);

  const dispatch = useDispatch();

  return (
    <div className="absolute h-screen w-screen bg-white z-10 flex flex-col items-center justify-evenly text-center md:h-[600px] md:w-[600px] md:relative md:self-center md:rounded-xl md:flex-row">
      <div className="md:flex md:flex-row md:flex-wrap md:w-full md:h:full md:justify-between">
        <div>
          <span className=" text-3xl font-bold md:ml-11">Rules</span>
        </div>
        <div className="md:order-last md:w-full md:justify-self-center md:flex md:justify-center md:mt-[20%]">
          <img
            className="md:self-center"
            alt="rules"
            src={hardMode ? hardModeRules : easyModeRules}
          />
        </div>
        <div className="md:mr-11 md:flex md:justify-center">
          <button onClick={() => dispatch(setShowRules(showRules))}>
            <img alt="close" src={iconClose} />{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
