import React from "react";
import Choices from "./components/choices/Choices";
import Mode from "./components/mode/Mode";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="bg-gradient-radial from-mainBG1 to-mainBG2 w-screen h-screen">
      <Header />
      <Choices />
      <Mode />  
    </div>
  );
}

export default App;
