import { createSlice } from "@reduxjs/toolkit"

import { hotelItemExample } from "./HotelItemExample"

const initialState = [ 
	hotelItemExample,
	// hotelItemExample,
	// hotelItemExample,
]

// initialState[1].hotelId = 333562
// initialState[2].hotelId = 333563

const hotelSlice = createSlice({
	name: 'hotels',
	initialState,
	reducers: {
		addToFavorite(state, action) {
			state.push(action.payload)
		},
		removeFromFavorite(state, action) {
			const idList = state.map(hotel => hotel.hotelId)
			const targetId = action.payload.hotelId

			const fn = item => item.hotelId != targetId

			return state = state.filter(fn)	
		},
		sortByRating(state) {
			return state.sort((a, b) => b.stars - a.stars)
		},
		reverseSortByRating(state, action) {
			if (action.payload) {
				return state.sort((a, b) => a.stars - b.stars)
			}
			return state.sort((a, b) => b.stars - a.stars)
		},
		sortByCost(state) {
			return state.sort((a, b) => b.priceFrom - a.priceFrom)
		},
		reverseSortByCost(state, action) {
			if (action.payload) {
				return state.sort((a, b) => a.priceFrom - b.priceFrom)
			}
			return state.sort((a, b) => b.priceFrom - a.priceFrom)
		}

	}
})

const {actions, reducer} = hotelSlice

export const {
	addToFavorite, 
	removeFromFavorite, 
	sortByRating,
	reverseSortByRating,
	sortByCost,
	reverseSortByCost 
} = actions

export default reducer 