import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	location: 'Москва',
	date: '2023-03-28',
	qtyDays: 1
}

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		getLocation(state, action) {
			state.location = action.payload
			console.log(state.location)
			},
		getDate(state, action) {
			state.date = action.payload
			},
		getQtyDays(state, action) {
			state.qtyDays = action.payload
			},
	}
})

const {actions, reducer} = searchSlice

export const {getLocation, getDate, getQtyDays, generateRequest} = actions
export default reducer



/*
Пример запроса
http://yasen.hotellook.com/tp/public/widget_location_dump.json?currency=rub&language=ru&limit=5&id=12209&type=popularity&check_in=2021-02-02&check_out=2021-02-17

*/