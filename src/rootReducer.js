import { combineReducers } from '@reduxjs/toolkit'
import filter from './services/filter/slice'
import movie from './services/movie/slice'

const rootReducer = combineReducers({
  filter,
  movie,
})

export default rootReducer
