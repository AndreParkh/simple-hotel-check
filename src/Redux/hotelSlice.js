import { createSlice } from "@reduxjs/toolkit"

import { hotelItemExample } from "./HotelItemExample"

const initialState = [ 
	{
		hotel: hotelItemExample,
		date: '02-09-2023',
		qtyDays: 2
	},
	// hotelItemExample,
	// hotelItemExample,
]

const hotelSlice = createSlice({
	name: 'hotels',
	initialState,
	reducers: {
		addToFavorite(state, action) {
			// action.payload.hotel.date = action.payload.date
			// action.payload.hotel.qtyDays = action.payload.qtyDays
			state.push({
				hotel: action.payload.hotel,
				date: action.payload.date,
				qtyDays: action.payload.qtyDays
			})
		},

		removeFromFavorite(state, action) {
			const targetId = action.payload.hotelId
			const fn = item => item.hotel.hotelId !== targetId

			return state.filter(fn)
		},
		
		sortByRating(state) {
			return state.sort((a, b) => b.stars - a.stars)
		},

		reverseSortByRating(state) {
			return state.sort((a, b) => a.stars - b.stars)
		},

		sortByCost(state) {
			return state.sort((a, b) => b.priceFrom - a.priceFrom)
		},

		reverseSortByCost(state) {
			return state.sort((a, b) => a.priceFrom - b.priceFrom)
		}

	}
})

const {actions, reducer} = hotelSlice

export const {
	addToFavorite, 
	removeFromFavorite, 
	sortByRating,
	sortByCost,
	reverseSortByRating,
	reverseSortByCost 
} = actions

export default reducer 