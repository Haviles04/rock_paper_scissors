import { createSlice } from "@reduxjs/toolkit";

export const gameModeSlice = createSlice({

    name: "gameMode",
    initialState: { value : 'Easy' },
    reducers: {
        setMode: (state , action) => {
            if(action.payload === 'Easy'){
                state.value = 'Hard';
            } else {
                state.value ='Easy';
            }
        },
    }

})

export const { setMode } = gameModeSlice.actions; 

export default gameModeSlice.reducer;