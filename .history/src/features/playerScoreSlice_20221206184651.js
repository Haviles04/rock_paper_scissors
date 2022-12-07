import { createSlice } from '@reduxjs/toolkit';

export const playerScoreSlice = createSlice({

    name: "playerScore",
    initialState: { value : 0 },
    reducers: {
        playerWin(state) {
            state.value = state + 1;
        },
        playerLost(state){
            state.value --;
        }
    }

})

export const {playerWin} = playerScoreSlice.actions;
export const {playerLost} = playerScoreSlice.actions;
export default playerScoreSlice.reducer;