import { createSlice } from '@reduxjs/toolkit';

export const choicesSlice = createSlice({

    name: "choices",
    initialState: { value : [{name: 'Rock', beats: 'Scissors'},{name: 'Paper', beats: 'Rock'},{name: 'Scissors', beats: 'Paper'}] },
    reducers: {
        setChoices(state, action) {
            state.value = action.payload;
        }
    }

})

export const { setChoices } = choicesSlice.actions; 


export default choicesSlice.reducer;