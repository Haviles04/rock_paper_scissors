import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userScoreReducer from './features/userScoreSlice'
import compScoreReducer from './features/compScoreSlice'

const store = configureStore({
  reducer: {
    userScore: userScoreReducer,
    compScore: compScoreReducer,
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
