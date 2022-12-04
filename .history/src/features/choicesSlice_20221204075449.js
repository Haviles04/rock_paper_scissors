import { createSlice } from "@reduxjs/toolkit";
import { rockImg } from '../assets/images/icon-rock.svg'
import { paperImg } from '../assets/images/icon-paper.svg'
import { scissorsImg } from '../assets/images/icon-scissors.svg'
import { spockImg } from '../assets/images/icon-spock.svg'
import { lizardImg } from '../assets/images/image-lizard.svg'

const initialState = {
    value: [
      { name: "Rock", beats: ["Scissors", "Lizard"], image:{rockImg} },
      { name: "Paper", beats: ["Rock","Spock"], image:{paperImg} },
      { name: "Scissors", beats: ["Paper", "Lizard" ], image:{scissorsImg}},
    ]}

export const choicesSlice = createSlice({
  name: "choices",
  initialState,
  reducers: {
    setChoices: (state , action) => {
      if (action.payload === "Hard") {
        state.value = [...initialState.value].concat([{ name: "Spock", beats:["Scissors","Rock"], image:{spockImg}}, {name: "Lizard", beats: ["Spock","Paper"], image:{lizardImg}}]);
      } else {
        state.value = initialState.value;
      }
    },
  },
});

export const { setChoices } = choicesSlice.actions;

export default choicesSlice.reducer;
