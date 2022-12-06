import { createSlice } from "@reduxjs/toolkit";


export const showRulesSlice = createSlice({

    name: "showRules",
    initialState: { value : false },
    reducers: {
        showRules(state) {
            state.value = !state.value;
        }
    }

})

export const { showRules } = showRulesSlice.actions;

export default showRulesSlice.reducer;