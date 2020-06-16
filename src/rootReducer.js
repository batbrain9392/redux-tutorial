import { combineReducers } from '@reduxjs/toolkit'
import track from './services/track/trackSlice'

const rootReducer = combineReducers({
  track,
})

export default rootReducer
