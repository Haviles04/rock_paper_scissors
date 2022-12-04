import { createSlice } from "@reduxjs/toolkit";

const initialState = {value : false};

export const hardModeSlice = createSlice({

    name: "hardMode",
    initialState,
    reducers: {
        setHardMode: (state) => {
          state.value = !state.value;
        },
    }

})

export const { setHardMode } = hardModeSlice.actions; 

export default hardModeSlice.reducer;