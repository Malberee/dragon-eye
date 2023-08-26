import { configureStore } from '@reduxjs/toolkit'
import dragonsReducer from './dragonsSlice'

export default configureStore({
	reducer: {
		dragons: dragonsReducer,
	},
})
