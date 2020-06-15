import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'

const middleware = getDefaultMiddleware()
if (process.env.NODE_ENV !== 'production') {
  let logger = require('redux-logger')
  middleware.push(logger)
}

export default configureStore({
  reducer: rootReducer,
  middleware,
})
