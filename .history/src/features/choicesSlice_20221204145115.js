import { createSlice } from "@reduxjs/toolkit";
import iconRock from "../assets/images/icon-rock.svg";
import iconPaper from "../assets/images/icon-paper.svg";
import iconScissors from "../assets/images/icon-scissors.svg";
import iconSpock from "../assets/images/icon-spock.svg";
import iconLizard from "../assets/images/icon-lizard.svg";

const initialState = {
  value: [
    {
      name: "Rock",
      beats: ["Scissors", "Lizard"],
      image: iconRock,
      id: 1,
      shadow: "0px 7px hsl(349, 71%, 52%)",
      border: 'hsl(349, 70%, 56%)',
    },
    {
      name: "Paper",
      beats: ["Rock", "Spock"],
      image: iconPaper,
      id: 2,
      shadow: "0px 7px hsl(230, 89%, 62%)",
      border: 'hsl(230, 89%, 65%)',
    },
    {
      name: "Scissors",
      beats: ["Paper", "Lizard"],
      image: iconScissors,
      id: 3,
      shadow: "0px 7px hsl(39, 89%, 49%)",
      border: 'hsl(40, 84%, 53%)',
    },
  ],
};

export const choicesSlice = createSlice({
  name: "choices",
  initialState,
  reducers: {
    setChoices: (state, action) => {
      if (action.payload === true) {
        state.value = [...initialState.value].concat([
          {
            name: "Spock",
            beats: ["Scissors", "Rock"],
            image: iconSpock,
            id: 4,
            shadow: "0px 7px hsl(189, 59%, 53%)",
            border: 'hsl(189, 58%, 57%)',
          },
          {
            name: "Lizard",
            beats: ["Spock", "Paper"],
            image: iconLizard,
            id: 5,
            shadow: "0px 7px #834FE3",
            border: 'hsl(261, 72%, 63%)',
          },
        ]);
      } else {
        state.value = initialState.value;
      }
    },
  },
});

export const { setChoices } = choicesSlice.actions;

export default choicesSlice.reducer;
