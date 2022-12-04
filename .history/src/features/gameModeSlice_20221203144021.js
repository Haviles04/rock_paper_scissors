import { createSlice } from "@reduxjs/toolkit";

export const gameModeSlice = createSlice({

    name: "gameMode",
    initialState: { value : "Easy" },
    reducers: {
        setMode: (state , action) => {
            state.value = action.payload
        },
    }

})

export default gameModeSlice.reducer;