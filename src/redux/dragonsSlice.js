import { createSlice } from '@reduxjs/toolkit'
import dragons from '../data/dragons.json'

const initialState = {
	selectedDragon: null,
	dragons,
}

const dragonsSlice = createSlice({
	name: 'dragons',
	initialState,
	reducers: {
		selectDragon(state, action) {
			state.selectedDragon = dragons.find(
				(dragon) => dragon.id === action.payload.id,
			)
		},
	},
})

export const { selectDragon } = dragonsSlice.actions

export default dragonsSlice.reducer
