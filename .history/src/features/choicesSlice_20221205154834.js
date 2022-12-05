import { createSlice } from "@reduxjs/toolkit";
import iconRock from "../assets/images/icon-rock.svg";
import iconPaper from "../assets/images/icon-paper.svg";
import iconScissors from "../assets/images/icon-scissors.svg";
import iconSpock from "../assets/images/icon-spock.svg";
import iconLizard from "../assets/images/icon-lizard.svg";

const initialState = {
  value: [
    {
      name: "Paper",
      beats: ["Rock", "Spock"],
      image: iconPaper,
      id: 2,
      shadow: "#4865f4",
      border: '#5671f5',
      col:'2',
      row:'1'
    },
    {
      name: "Scissors",
      beats: ["Paper", "Lizard"],
      image: iconScissors,
      id: 3,
      shadow: "#ec9e0e",
      border: '#eca922',
      col: '4',
      row: '1'
    },
    {
      name: "Rock",
      beats: ["Scissors", "Lizard"],
      image: iconRock,
      id: 1,
      shadow: "#dc2e4e",
      border: '#dd405d',
      col: '3',
      row: '2'
    }
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
            name: "Lizard",
            beats: ["Spock", "Paper"],
            image: iconLizard,
            id: 5,
            shadow: "#834fe3",
            border: '#8c5de5',
            col: '1',
            row: '2'
          },
          {
            name: "Spock",
            beats: ["Scissors", "Rock"],
            image: iconSpock,
            id: 4,
            shadow: "#40b9ce",
            border: '#52bed1',
            col: '2',
            row: '3'
          }
        ]);
      } else {
        state.value = initialState.value;
      }
    },
  },
});

export const { setChoices } = choicesSlice.actions;

export default choicesSlice.reducer;
