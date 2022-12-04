import React from "react";
import Choices from "./components/choices/Choices";
import Mode from "./components/mode/Mode";

function App() {
  return (
    <div className="bg-gradient-radial from-mainBG1 to-mainBG2 w-screen h-screen flex justify-center">
      <>
      <Choices />
      </>
      <Mode />  
    </div>
  );
}

export default App;
