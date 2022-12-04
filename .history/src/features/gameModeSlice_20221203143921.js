import { createSlice } from "@reduxjs/toolkit";

export const gameModeSlice = createSlice({

    name: "gameMode",
    initialState: { value : "Easy" },
    reducers: {
        setMode: (mode) => {
            return mode;
        }
    }

})

export default gameModeSlice.reducer;