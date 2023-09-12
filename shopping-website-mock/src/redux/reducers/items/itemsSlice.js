import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
}

export const itemSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        loadItems: (state, action) => {
            state.items = [...action.payload]
        } 
    }
})

export const { loadItems } = itemSlice.actions

export default itemSlice.reducer