import { createSlice } from '@reduxjs/toolkit'

export const trackSlice = createSlice({
  name: 'track',
  initialState: [
    {
      title: 'Some track',
    },
    {
      title: 'Some other track',
    },
  ],
  reducers: {
    setTracks: (state, action) => {
      state.concat(action.payload)
    },
  },
})

export const { setTracks } = trackSlice.actions

export default trackSlice.reducer
