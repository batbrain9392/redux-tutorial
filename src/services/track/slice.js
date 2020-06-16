import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'track',
  initialState: [],
  reducers: {
    setTracks: (state, action) => {
      state.concat(action.payload)
    },
  },
})

export const { setTracks } = slice.actions

export default slice.reducer
