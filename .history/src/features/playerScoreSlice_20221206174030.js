import { createSlice } from '@reduxjs/toolkit';

export const playerScoreSlice = createSlice({

    name: "playerScore",
    initialState: { value : 0 },
    reducers: {
        playerWin(state) {
            state.value ++;
        },
        playerLost(state){
            state.value --;
        }
    }

})

export const {playerWin} = playerScoreSlice.actions;

export default playerScoreSlice.reducer;