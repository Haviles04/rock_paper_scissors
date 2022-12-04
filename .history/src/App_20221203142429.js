import React from "react";
import Score from "./components/Score/Score";
import Mode from "./components/mode/mode";

function App() {
  return (
    <div className="App">
      <div className='flex justify-center text-red-500'>
        <Score />
      </div>
    </div>
  );
}

export default App;
