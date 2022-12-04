import { createSlice } from "@reduxjs/toolkit";

export const gameModeSlice = createSlice({

    name: "gameMode",
    initialState: { value : 'Easy' },
    reducers: {
        setMode: (state , action) => {
            state.value = action.payload
        },
    }

})

export const { setMode } = gameModeSlice.actions; 

export default gameModeSlice.reducer;