import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	classes: [],
	rarities: [],
	abilities: [],
}

const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		addFilter(state, action) {
			if (action.payload.action === 'add') {
				state[action.payload.type].push(action.payload.value)
			}
			if (action.payload.action === 'remove') {
				state[action.payload.type] = state[action.payload.type].filter(
					(item) => item !== action.payload.value,
				)
            }
            
            
		},
	},
})

export const { addFilter } = filtersSlice.actions

export default filtersSlice.reducer
