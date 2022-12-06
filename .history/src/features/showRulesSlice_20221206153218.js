import { createSlice } from "@reduxjs/toolkit";


export const showRulesSlice = createSlice({

    name: "showRules",
    initialState: { value : false },
    reducers: {
        setShowRules(state) {
            state.value = !state.value;
        }
    }

})

export const { setShowRules } = showRulesSlice.actions;

export default showRulesSlice.reducer;