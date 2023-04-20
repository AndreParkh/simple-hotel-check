import { createSlice } from "@reduxjs/toolkit"

import { hotelItemExample } from "./HotelItemExample"

const initialState = [ 
	hotelItemExample,
	// hotelItemExample,
	// hotelItemExample,
]

const hotelSlice = createSlice({
	name: 'hotels',
	initialState,
	reducers: {
		addToFavorite(state, action) {
			state.push(action.payload)
		},

		removeFromFavorite(state, action) {
			const targetId = action.payload.hotelId
			const fn = item => item.hotelId !== targetId

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