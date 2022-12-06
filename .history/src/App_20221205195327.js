import React from "react";
import Choices from "./components/choices/Choices";
import Mode from "./components/mode/Mode";
import Score from "./components/Score/Score";

function App() {
  return (
    <div className="bg-gradient-radial from-mainBG1 to-mainBG2 w-screen h-screen">
      <Score />
      <Choices />
      <Mode />  
    </div>
  );
}

export default App;
