import { createSlice } from "@reduxjs/toolkit";

export const compChoiceSlice = createSlice({
    

    name: "compChoice",
    initialState: { value : null },
    reducers: {
        compSelect(state, action ) {
            state.value = action.payload;
        },
        compReset(state){
            state.value = state.initialState;
        }
    }

})

export const { compSelect } = compChoiceSlice.actions;

export default compChoiceSlice.reducer;