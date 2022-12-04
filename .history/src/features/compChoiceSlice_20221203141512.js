import { createSlice } from "@reduxjs/toolkit";

export const compChoiceSlice = createSlice({
  name: "compChoice",
  initialState: { value: "" },
  reducers: {
    compSelect(mode) {
      const rng = (mode = "hard"
        ? Math.floor(Math.random() * 5)
        : Math.floor(Math.random() * 3));

      switch (rng) {
        case 1:
          return "rock";
        case 2:
          return "paper";
        case 3:
          return "scissors";
        case 4:
          return "spock";
        case 5:
          return "lizard";
        default:
          return "";
      }
    },
  },
});

export default compChoiceSlice.reducer;
