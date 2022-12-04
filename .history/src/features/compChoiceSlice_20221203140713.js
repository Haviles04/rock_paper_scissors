export const compChoiceSlice = createSlice({

    name: "compChoice",
    initialState: { value : 0 },
    reducers: {
        increment(state) {
            state.value ++;
        }
    }

})

export default compChoiceSlice.reducer;