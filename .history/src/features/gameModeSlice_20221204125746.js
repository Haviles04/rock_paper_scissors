import { createSlice } from "@reduxjs/toolkit";

const initialState = {value : false};

export const hardModeSlice = createSlice({

    name: "hardMode",
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

export const { setMode } = hardModeSlice.actions; 

export default hardModeSlice.reducer;