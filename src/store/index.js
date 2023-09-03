import { configureStore } from '@reduxjs/toolkit'
import dragonsReducer from './dragonsSlice'
import filtersReducer from './filtersSlice'

export default configureStore({
	reducer: {
		dragons: dragonsReducer,
		filters: filtersReducer,
	},
})
