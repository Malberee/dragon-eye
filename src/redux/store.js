import { configureStore } from '@reduxjs/toolkit'
import dragonsReducer from './dragons/slice'
import filtersReducer from './filters/slice'

export default configureStore({
  reducer: {
    dragons: dragonsReducer,
    filters: filtersReducer,
  },
})
