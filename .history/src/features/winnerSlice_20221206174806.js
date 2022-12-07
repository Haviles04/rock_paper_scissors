import { createSlice } from "@reduxjs/toolkit";

export const winnerSlice = createSlice({

    name: "winner",
    initialState: { value : null },
    reducers: {
        setShowRules(state, action) {
            state.value = action.payload;
        }
    }

})

export const { setShowRules } = winnerSlice.actions;

export default winnerSlice.reducer;