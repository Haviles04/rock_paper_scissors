export const compChoiceSlice = createSlice({

    name: "compChoice",
    initialState: { value : "" },
    reducers: {
        compSelect() {
            return Math.floor(Math.random()* 3)
        }
    }

})

export default compChoiceSlice.reducer;