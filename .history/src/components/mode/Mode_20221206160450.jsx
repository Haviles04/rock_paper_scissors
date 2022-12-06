import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setHardMode } from "../../features/hardModeSlice";
import { setChoices } from "../../features/choicesSlice";


export default function Mode() {
  const hardMode = useSelector((state) => state.hardMode.value);
  const dispatch = useDispatch();

  //sets Choices state when user changes game to hard mode.
  useEffect(() => {
    dispatch(setChoices(hardMode));
  
  }, [dispatch, hardMode]);

  const handleChange = () => {
    dispatch(setHardMode(hardMode));
    
  };

  return (
    <div className="flex justify-center w-screen mt-8">
      <label className="block relative items-center text-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onClick={() => handleChange()}
        />
        <div className="w-11 h-6 bg-blue-500 rounded-full peer dark:bg-blue-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          
          <p className={hardMode ? "text-red-500" : "text-blue-500 block"}>
            {hardMode ? "Hard" : "Easy"}
          </p>
          
        </span>
      </label>
    </div>
  );
}
