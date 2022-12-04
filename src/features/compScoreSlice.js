import { createSlice } from '@reduxjs/toolkit';

export const compScoreSlice = createSlice({

    name: "compScore",
    initialState: { value : 0 },
    reducers: {
        computerWin(state) {
            state.value ++;
        }
    }

})

export default compScoreSlice.reducer;