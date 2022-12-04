import { createSlice } from "@reduxjs/toolkit";

export const gameModeSlice = createSlice({

    name: "gameMode",
    initialState: { value : "Easy" },
    reducers: {
        setMode: (state ) => {
            return state.value === 'Easy' ? 'Hard ' : 'Easy'
        },
    }

})

export const { setMode } = gameModeSlice.actions; 

export default gameModeSlice.reducer;