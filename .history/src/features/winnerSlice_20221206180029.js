import { createSlice } from "@reduxjs/toolkit";

export const winnerSlice = createSlice({

    name: "winner",
    initialState: { value : null },
    reducers: {
        setWinner(state, comp, player) {
            if(comp.beats.includes(player.name)){
                state.value = 'comp'
            } else if(comp.name === player.name){
                state.value = 'tie'
            } else {
                state.value = 'player';
            }
        }
    }

})

export const { setWinner } = winnerSlice.actions;

export default winnerSlice.reducer;