import { combineReducers } from '@reduxjs/toolkit'
import track from './services/track/slice'

const rootReducer = combineReducers({
  track,
})

export default rootReducer
