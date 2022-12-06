import { createSlice } from "@reduxjs/toolkit";

export const playerChoiceSlice = createSlice({

    name: "playerChoice",
    initialState: { value : "" },
    reducers: {
        playerSelect(state, action ) {
            state.value = state.action.payload;
        }
    }

})

export default playerChoiceSlice.reducer;