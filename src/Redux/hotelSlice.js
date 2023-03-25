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
		}

	}
})

const {actions, reducer} = hotelSlice

export const {addToFavorite, removeFromFavorite } = actions
export default reducer 