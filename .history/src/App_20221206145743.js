import React from "react";
import Choices from "./components/choices/Choices";
import Mode from "./components/mode/Mode";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="bg-gradient-radial from-mainBG1 to-mainBG2 w-screen h-screen flex flex-col justify-around">
      <Header />
      <Choices />
      <button className="border-2 w-[100px]">Rules</button>
      <Mode />  
    </div>
  );
}

export default App;
