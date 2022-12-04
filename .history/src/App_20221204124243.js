import React from "react";
import Choices from "./components/choices/Choices";
import Mode from "./components/mode/Mode";

function App() {
  return (
    <div className="bg-gradient-to-r from-hsl(214, 47%, 23%) to-blue-500 w-100 h-screen">
      <div className='flex justify-center text-red-500'>
        <Choices />
      </div>
        <Mode />
    </div>
  );
}

export default App;


