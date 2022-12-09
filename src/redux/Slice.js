import {createSlice} from '@reduxjs/toolkit';

const XSlice = createSlice({
    name:"slice",
    initialState: {
        lang: 1
    },
    reducers: {
        changeLang(state, action) {state.lang = action.payload}
    }
})

export const {changeLang} = XSlice.actions;
export default XSlice.reducer;