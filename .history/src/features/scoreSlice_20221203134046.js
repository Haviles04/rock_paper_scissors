import { createSlice } from '@reduxjs/toolkit';

const userScoreSlice = createSlice({

    name: "score",
    initialState: { value : 0 },
    reducers: {
        increment(state) {
            state.value ++;
        }
    }

})