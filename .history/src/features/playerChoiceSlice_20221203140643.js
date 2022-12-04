import { createSlice } from "@reduxjs/toolkit";

export const playerChoiceSlice = createSlice({

    name: "playerChoice",
    initialState: { value : "" },
    reducers: {
        playerSelect(state) {
            return state;
        }
    }

})

export default userScoreSlice.reducer;