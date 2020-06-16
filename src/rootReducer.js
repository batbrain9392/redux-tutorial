import { combineReducers } from '@reduxjs/toolkit'
import movie from './services/movie/slice'

const rootReducer = combineReducers({
  movie,
})

export default rootReducer
