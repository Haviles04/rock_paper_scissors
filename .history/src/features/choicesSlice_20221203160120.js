import { createSlice } from '@reduxjs/toolkit';

export const choicesSlice = createSlice({

    name: "choices",
    initialState: { value : [{name: 'Rock', beats: 'Scissors'},{name: 'Paper', beats: 'Rock'},{name: 'Scissors', beats: 'Paper'}] },
    reducers: {
        setChoices(state , action) {
           if (action.payload ==='Easy') {
            state.value = state.initialState;
           } else if (action.payload === 'Hard'){
            state.value = state.initialState.concat([{name:'Spock', beats:'Lizard'}, {name:'Lizard', beats:'Spock'}])
           } else {
            state.value = state.initialState;
           }
        }
    }

})

export const { setChoices } = choicesSlice.actions; 


export default choicesSlice.reducer;