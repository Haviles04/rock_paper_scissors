import { createSlice } from "@reduxjs/toolkit";
import  iconRock  from '../assets/images/icon-rock.svg'
import  iconPaper  from '../assets/images/icon-paper.svg'
import  iconScissors  from '../assets/images/icon-scissors.svg'
import  iconSpock  from '../assets/images/icon-spock.svg'
import  iconLizard  from '../assets/images/icon-lizard.svg'

const initialState = {
    value: [
      { name: "Rock", beats: ["Scissors", "Lizard"], image:iconRock, id:1},
      { name: "Paper", beats: ["Rock","Spock"], image:iconPaper, id:2 },
      { name: "Scissors", beats: ["Paper", "Lizard" ], image:iconScissors, id:3 },
    ]}

export const choicesSlice = createSlice({
  name: "choices",
  initialState,
  reducers: {
    setChoices: (state , action) => {
      if (action.payload === "Hard") {
        state.value = [...initialState.value].concat([{ name: "Spock", beats:["Scissors","Rock"], image:iconSpock, id:4}, {name: "Lizard", beats: ["Spock","Paper"], image:iconLizard, id:5}]);
      } else {
        state.value = initialState.value;
      }
    },
  },
});

export const { setChoices } = choicesSlice.actions;

export default choicesSlice.reducer;
