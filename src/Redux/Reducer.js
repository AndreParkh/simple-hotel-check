import { combineReducers, configureStore } from "@reduxjs/toolkit";
import hotelSlice from "./hotelSlice";
import searchSlice from "./searchSlice";



const rootReducer = combineReducers({
	search: searchSlice,
	hotels: hotelSlice
})

export const store = configureStore({
	reducer: rootReducer
})