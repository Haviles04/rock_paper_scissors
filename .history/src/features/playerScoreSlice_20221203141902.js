import { createSlice } from '@reduxjs/toolkit';

export const playerScoreSlice = createSlice({

    name: "playerScore",
    initialState: { value : 0 },
    reducers: {
        playerWin(state) {
            state.value ++;
        }
    }

})

export default playerScoreSlice.reducer;