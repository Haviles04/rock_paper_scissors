import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import playerScoreReducer from "./features/playerScoreSlice";
import hardModeReducer from "./features/hardModeSlice";
import playerChoiceReducer from "./features/playerChoiceSlice";
import choicesReducer from "./features/choicesSlice";
import showRulesReducer from './features/showRulesSlice';
import compChoiceReducer from './features/compChoiceSlice';
import winnerReducer from './features/winnerSlice';

const store = configureStore({
  reducer: {
    playerScore: playerScoreReducer,
    hardMode: hardModeReducer,
    playerChoice: playerChoiceReducer,
    compChoice: compChoiceReducer,
    choices: choicesReducer,
    showRules: showRulesReducer,
    winner: winnerReducer
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
