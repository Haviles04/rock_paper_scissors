import { createSlice } from "@reduxjs/toolkit";

export const compChoiceSlice = createSlice({
    

    name: "compChoice",
    initialState: { value : null },
    reducers: {
        compSelect(state, action ) {
            setTimeout(state.value = action.payload, 6000);
        },
        compReset(state){
            state.value = state.initialState;
        }
    }

})

export const { compSelect } = compChoiceSlice.actions;

export default compChoiceSlice.reducer;