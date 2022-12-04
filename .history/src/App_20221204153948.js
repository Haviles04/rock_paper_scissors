import React from "react";
import Choices from "./components/choices/Choices";
import Mode from "./components/mode/Mode";

function App() {
  return (
    <div className="bg-gradient-radial from-mainBG1 to-mainBG2 w-screen h-screen">
      <div className='flex justify-center text-red-500'>
        <Choices />
        <Mode />
      </div>
        
    </div>
  );
}

export default App;


