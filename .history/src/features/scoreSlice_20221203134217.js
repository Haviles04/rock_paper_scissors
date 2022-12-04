import { createSlice } from '@reduxjs/toolkit';

export const userScoreSlice = createSlice({

    name: "score",
    initialState: { value : 0 },
    reducers: {
        increment(state) {
            state.value ++;
        }
    }

})

export default userScoreSlice.reducers;