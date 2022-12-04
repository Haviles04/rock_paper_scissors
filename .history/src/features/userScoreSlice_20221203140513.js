import { createSlice } from '@reduxjs/toolkit';

export const userScoreSlice = createSlice({

    name: "userScore",
    initialState: { value : 0 },
    reducers: {
        userWin(state) {
            state.value ++;
        }
    }

})

export default userScoreSlice.reducer;