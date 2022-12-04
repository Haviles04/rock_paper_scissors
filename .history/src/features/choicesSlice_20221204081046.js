import { createSlice } from "@reduxjs/toolkit";
import  iconRock  from '../assets/images/icon-rock.svg'
import  iconPaper  from '../assets/images/icon-paper.svg'
import  iconScissors  from '../assets/images/icon-scissors.svg'
import  iconSpock  from '../assets/images/icon-spock.svg'
import  iconLizard  from '../assets/images/icon-lizard.svg'

const initialState = {
    value: [
      { name: "Rock", beats: ["Scissors", "Lizard"], id:1},
      { name: "Paper", beats: ["Rock","Spock"], id:2 },
      { name: "Scissors", beats: ["Paper", "Lizard" ], id:3 },
    ]}

export const choicesSlice = createSlice({
  name: "choices",
  initialState,
  reducers: {
    setChoices: (state , action) => {
      if (action.payload === "Hard") {
        state.value = [...initialState.value].concat([{ name: "Spock", beats:["Scissors","Rock"], id:4}, {name: "Lizard", beats: ["Spock","Paper"], id:5}]);
      } else {
        state.value = initialState.value;
      }
    },
  },
});

export const { setChoices } = choicesSlice.actions;

export default choicesSlice.reducer;
