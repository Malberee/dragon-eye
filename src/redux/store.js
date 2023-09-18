import { configureStore } from '@reduxjs/toolkit'
import { dragonsApi } from './dragonsApi'
import filtersReducer from './filtersSlice'

export const store = configureStore({
  reducer: {
    [dragonsApi.reducerPath]: dragonsApi.reducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dragonsApi.middleware),
})
