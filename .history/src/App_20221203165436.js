import React from "react";
import Choices from "./components/Choices";
import Mode from "./components/mode/Mode";

function App() {
  return (
    <div className="App">
      <div className='flex justify-center text-red-500'>
        <Choices />
      </div>
        <Mode />
    </div>
  );
}

export default App;
