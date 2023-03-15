import { createSlice } from "@reduxjs/toolkit"


const hotelSlice = createSlice({
	name: 'hotel',
	initialState: [],
	reducers: {
		addInFavorites(state, action) {
			state[0] = action.payload
			console.log(state)
		}
	}
})

const {actions, reducer} = hotelSlice

export const {addInFavorites} = actions
export default reducer