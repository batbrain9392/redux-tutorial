import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import filter from './services/filter/slice'
import movie from './services/movie/slice'

const middleware = getDefaultMiddleware()
if (process.env.NODE_ENV !== 'production') {
  let logger = require('redux-logger').default
  middleware.push(logger)
}

export default configureStore({
  reducer: {
    filter,
    movie,
  },
  middleware,
})
