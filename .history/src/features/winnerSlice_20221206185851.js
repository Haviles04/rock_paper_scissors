import { createSlice } from "@reduxjs/toolkit";

export const winnerSlice = createSlice({

    name: "winner",
    initialState: { value : 'none' },
    reducers: {
        setWinner(state, action) {
            state.value = action.payload;
        },
        resetWinner(state){
            state.value = state.initialState.value;
        }
    }

})

export const { setWinner } = winnerSlice.actions;
export const { resetWinner } = winnerSlice.actions;
export default winnerSlice.reducer;