import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import movieAPI from './api'

const sliceName = 'movie'

export const fetchMoviesBySearch = createAsyncThunk(
  `${sliceName}/fetchMoviesBySearch`,
  async ({ searchTerm, page, type, year }) => {
    const result = await movieAPI.fetchBySearch(searchTerm, page, type, year)
    return result
  }
)

export const slice = createSlice({
  name: sliceName,
  initialState: {
    entities: [],
    totalEntities: 0,
    error: '',
    loading: false,
  },
  reducers: {
    resetMovies: (state) => ({
      ...state,
      entities: [],
      totalEntities: 0,
    }),
  },
  extraReducers: {
    [fetchMoviesBySearch.pending]: (state) => {
      state.loading = true
    },
    [fetchMoviesBySearch.fulfilled]: (state, action) => {
      state.entities = action.payload.Search
      state.totalEntities = action.payload.totalResults
      state.error = ''
      state.loading = false
    },
    [fetchMoviesBySearch.rejected]: (state, action) => {
      state.entities = []
      state.totalEntities = 0
      state.error = action.error.message
      state.loading = false
    },
  },
})

export const { resetMovies } = slice.actions

export default slice.reducer
