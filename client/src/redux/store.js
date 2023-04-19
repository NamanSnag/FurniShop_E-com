import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from './userAuth';
import cart from './cart';

const rootReducer = combineReducers({user: userReducer, cart: cart});

export const store = configureStore({
    reducer: rootReducer
})