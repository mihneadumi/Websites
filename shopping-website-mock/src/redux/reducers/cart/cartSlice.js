import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    totalPrice: 0,
    showCart: false, // false - catalog showing / true - cart showing
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            state.cart.push({...newItem, quantity: 1});
            state.totalPrice = state.totalPrice + newItem.price;
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        },
        emptyCart: (state) => {
            state.cart = [];
            state.totalPrice = 0;
        },
        showCart: (state) => {
            state.showCart = true;
        },
        hideCart: (state) => {
            state.showCart = false;
        }
    }
})

export const {addItem, removeItem, emptyCart, showCart, hideCart} = cartSlice.actions;

export default cartSlice.reducer;