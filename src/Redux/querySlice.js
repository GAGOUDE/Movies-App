
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    query: "",
}

export const querySlice = createSlice({
    name: "query",
    initialState,
    reducers: {
        updateQuery: (state, action) => {
            state.query = action.payload
        }
    }
})

export const { updateQuery } = querySlice.actions;

export default querySlice.reducer;