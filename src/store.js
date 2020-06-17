import { configureStore } from '@reduxjs/toolkit'
import filter from './services/filter/slice'
import movie from './services/movie/slice'

export default configureStore({
  reducer: {
    filter,
    movie,
  },
})
