import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	location: '',
	date: '',
	qtyDays: 1
}

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setLocation(state, action) {
			state.location = action.payload
			console.log(action.payload)
			},
		setDate(state, action) {
			state.date = action.payload
			},
		setQtyDays(state, action) {
			state.qtyDays = action.payload
	}}
})

const {actions, reducer} = searchSlice

export const {setLocation, setDate, setQtyDays} = actions
export default reducer