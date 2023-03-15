import { createReducer } from "@reduxjs/toolkit";
import { setDate, setLocation, setQtyDays } from "./actians";

import initialState from "./initialState";

const searchFormReducer = createReducer(initialState, {
	[setLocation]: function(state, action) {
		state.searchForm.location = action.payload
	},
	[setDate]: function(state, action) {
		state.searchForm.date= action.payload
	},
	[setQtyDays]: function(state, action) {
		state.searchForm.qtyDays= action.payload
		// console.log(action.payload)
	},
})

export default searchFormReducer