import React from "react";
import Choices from "./components/choices/Choices";
import Mode from "./components/mode/Mode";
import Header from "./components/header/Header";
import RulesButton from "./components/rulesButton/RulesButton";
import Rules from "./components/rules/Rules";
import Results from "./components/results/Results";
import { useSelector } from "react-redux";

function App() {
  const showRules = useSelector((state) => state.showRules.value);
  const playerChoice = useSelector((state) => state.playerChoice.value);
  return (
    <div className="bg-gradient-radial from-mainBG1 to-mainBG2 w-screen h-screen flex flex-col justify-around">
      <section>
        <Header />
      </section>
      <section>
        {!showRules && !playerChoice ? (
          <Choices />
        ) : showRules ? (
          <Rules />
        ) : (
          <Results />
        )}
      </section>
      <section>
        <RulesButton />
      </section>
      <Mode />
    </div>
  );
}

export default App;