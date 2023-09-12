import { combineReducers, configureStore } from '@reduxjs/toolkit'
import itemsReducer from './reducers/items/itemsSlice'
import cartReducer from './reducers/cart/cartSlice'

const almightyReducer = combineReducers({
    catalog: itemsReducer,
    cart: cartReducer
})

const store = configureStore({
  reducer: almightyReducer,
})

export default store