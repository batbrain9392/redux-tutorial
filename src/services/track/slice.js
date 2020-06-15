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

// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount))
//   }, 1000)
// }

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectCount = (state) => state.counter.value

export default slice.reducer
