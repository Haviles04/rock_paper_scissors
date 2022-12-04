import React from "react";
import Choices from "./components/choices/Choices";
import Mode from "./components/mode/Mode";

function App() {
  return (
    <div className="bg-gradient-to-r from-mainbg1 to-blue-500 w-screen h-screen">
      <div className='flex justify-center text-red-500'>
        <Choices />
      </div>
        <Mode />
    </div>
  );
}

export default App;


