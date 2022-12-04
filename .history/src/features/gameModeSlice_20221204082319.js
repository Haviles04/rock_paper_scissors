import { createSlice } from "@reduxjs/toolkit";

const initialState = {value : 'Easy'};

export const gameModeSlice = createSlice({

    name: "gameMode",
    initialState,
    reducers: {
        setMode: (state , action) => {
            if(action.payload === 'Easy'){
                state.value = 'Hard';
            } else {
                state.value = initialState.value;
            }
        },
    }

})

export const { setMode } = gameModeSlice.actions; 

export default gameModeSlice.reducer;