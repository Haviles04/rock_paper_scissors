import { createSlice } from '@reduxjs/toolkit';

export const choicesSlice = createSlice({

    name: "choices",
    initialState: { value : {rock: 'Rock', paper: 'Paper', scissors: 'Scissors'} },
    reducers: {
        setChoices(state, action) {
            state.value = action.payload;
        }
    }

})

export default choicesSlice.reducer;