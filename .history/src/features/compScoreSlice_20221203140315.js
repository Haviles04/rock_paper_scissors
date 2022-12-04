import { createSlice } from '@reduxjs/toolkit';

export const compScoreSlice = createSlice({

    name: "compScore",
    initialState: { value : 2 },
    reducers: {
        increment(state) {
            state.value ++;
        }
    }

})

export default compScoreSlice.reducer;