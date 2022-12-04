import { createSlice } from '@reduxjs/toolkit';

export const choicesSlice = createSlice({

    name: "choices",
    initialState: { value : [{name: 'Rock', beats: 'Scissors'},{name: 'Paper', beats: 'Rock'},{name: 'Scissors', beats: 'Paper'}] },
    reducers: {
        setChoices(state , action) {
           if (action.payload ==='Easy') {
            state.value = state.initialState.value;
           } else if(action.payload === 'Hard'){
            state.value = [...state.initialState.value].concat ( [{poop: 'Poop'}] );
           } 
        }
    }

})

export const { setChoices } = choicesSlice.actions; 


export default choicesSlice.reducer;