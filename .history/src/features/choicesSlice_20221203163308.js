import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [
      { name: "Rock", beats: "Scissors" },
      { name: "Paper", beats: "Rock" },
      { name: "Scissors", beats: "Paper" },
    ]}

export const choicesSlice = createSlice({
  name: "choices",
  initialState,
  reducers: {
    setChoices: (state , action) => {
      if (action.payload === "Hard") {
        state.value = [...initialState.value].concat([{name:"Rock", beats:"Lizard" },{ name: "Spock", beats:"Scissors"}, {name: "Lizard", beats: "Spock"}]).splice(1);
      } else {
        state.value = initialState.value;
      }
    },
  },
});

export const { setChoices } = choicesSlice.actions;

export default choicesSlice.reducer;
