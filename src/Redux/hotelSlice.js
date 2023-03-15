import { createSlice } from "@reduxjs/toolkit"


const hotelSlice = createSlice({
	name: 'hotels',
	initialState: [],
	reducers: {
		addInFavorites(state, action) {
			state.push(action.payload)
			console.log(action.payload)
		}
	}
})

const {actions, reducer} = hotelSlice

export const {addInFavorites} = actions
export default reducer 