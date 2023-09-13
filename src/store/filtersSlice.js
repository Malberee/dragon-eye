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
      state[action.payload.type] = action.payload.values
    },
  },
})

export const { addFilter } = filtersSlice.actions

export default filtersSlice.reducer
