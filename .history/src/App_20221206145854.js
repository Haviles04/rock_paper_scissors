import React from "react";
import Choices from "./components/choices/Choices";
import Mode from "./components/mode/Mode";
import Header from "./components/header/Header";
import RulesButton from "./components/rulesButton/RulesButton";

function App() {
  return (
    <div className="bg-gradient-radial from-mainBG1 to-mainBG2 w-screen h-screen flex flex-col justify-around">
      <Header />
      <Choices />
      <RulesButton />
      <Mode />  
    </div>
  );
}

export default App;
