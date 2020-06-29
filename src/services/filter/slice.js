import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchMoviesBySearch, resetMovies } from '../movie/slice'

const sliceName = 'filter'

const slice = createSlice({
  name: sliceName,
  initialState: {
    searchTerm: '',
    page: 1,
    type: '',
  },
  reducers: {
    setSearchTerm: (state, action) => ({
      ...state,
      searchTerm: action.payload,
      page: 1,
    }),
    resetFilters: () => ({
      searchTerm: '',
      page: 1,
      type: '',
    }),
    setPageState: (state, action) => ({
      ...state,
      page: action.payload,
    }),
    setTypeState: (state, action) => ({
      ...state,
      type: action.payload,
      page: 1,
    }),
  },
})

const {
  setSearchTerm,
  resetFilters,
  setPageState,
  setTypeState,
} = slice.actions

export const search = createAsyncThunk(
  `${sliceName}/search`,
  (payload, { dispatch }) => {
    dispatch(setSearchTerm(payload))
    dispatch(fetchMoviesBySearch())
  }
)

export const resetSearch = createAsyncThunk(
  `${sliceName}/resetSearch`,
  (_, { dispatch }) => {
    dispatch(resetFilters())
    dispatch(resetMovies())
  }
)

export const setPage = createAsyncThunk(
  `${sliceName}/setPage`,
  (payload, { dispatch }) => {
    dispatch(setPageState(payload))
    dispatch(fetchMoviesBySearch())
  }
)

export const setType = createAsyncThunk(
  `${sliceName}/setType`,
  (payload, { dispatch }) => {
    dispatch(setTypeState(payload))
    dispatch(fetchMoviesBySearch())
  }
)

export default slice.reducer
