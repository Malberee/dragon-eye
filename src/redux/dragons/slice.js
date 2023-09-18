import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import dragons from '../data/dragons.json'

export const fetchDragons = createAsyncThunk(
  'dragons/fetchDragons',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        'https://65081ad556db83a34d9bc20d.mockapi.io/api/dragons',
      )

      if (!response.ok) {
        throw new Error('Could not fetch dragons')
      }

      const data = await response.json()

      return data
    } catch (err) {
      return rejectWithValue(err.message)
    }
  },
)

const initialState = {
  dragons: [],
  selectedDragon: null,
  status: null,
  error: null,
}

const dragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {
    selectDragon(state, action) {
      state.selectedDragon = state.dragons.find(
        (dragon) => dragon.id === action.payload.id,
      )
    },
  },
  extraReducers: {
    [fetchDragons.pending]: (state) => {
      state.status = 'loading'
      state.error = null
    },
    [fetchDragons.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.dragons = action.payload
    },
    [fetchDragons.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    },
  },
})

export const { selectDragon } = dragonsSlice.actions

export default dragonsSlice.reducer
