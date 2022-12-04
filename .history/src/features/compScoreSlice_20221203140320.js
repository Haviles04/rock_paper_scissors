import { createSlice } from '@reduxjs/toolkit';

export const compScoreSlice = createSlice({

    name: "compScore",
    initialState: { value : 0 },
    reducers: {
        increment(state) {
            state.value ++;
        }
    }

})

export default compScoreSlice.reducer;