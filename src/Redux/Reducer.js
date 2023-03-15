import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchFormReducer from "./reducers";



const rootReducer = combineReducers({
	main: searchFormReducer
})

export const store = configureStore({
	reducer: rootReducer
})