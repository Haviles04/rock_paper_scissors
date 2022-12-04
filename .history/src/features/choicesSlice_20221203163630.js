import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [
      { name: "Rock", beats: ["Scissors", "Lizard"] },
      { name: "Paper", beats: ["Rock","Spock"] },
      { name: "Scissors", beats: ["Paper", "Lizard" ]},
    ]}

export const choicesSlice = createSlice({
  name: "choices",
  initialState,
  reducers: {
    setChoices: (state , action) => {
      if (action.payload === "Hard") {
        state.value = [...initialState.value].concat([{ name: "Spock", beats:["Scissors","Rock"]}, {name: "Lizard", beats: ["Spock","Paper"]}]);
      } else {
        state.value = initialState.value;
      }
    },
  },
});

export const { setChoices } = choicesSlice.actions;

export default choicesSlice.reducer;
