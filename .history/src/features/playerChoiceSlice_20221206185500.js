import { createSlice } from "@reduxjs/toolkit";

export const playerChoiceSlice = createSlice({
    

    name: "playerChoice",
    initialState: { value : null },
    reducers: {
        playerSelect(state, action ) {
            state.value = action.payload;
        },
        playerReset(state){
            state.value = state.initialState;
        }
    }

})

export const { playerSelect } = playerChoiceSlice.actions;
export const {playerReset} = playerChoiceSlice.actions;
export default playerChoiceSlice.reducer;