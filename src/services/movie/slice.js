import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import movieAPI from './api'

const sliceName = 'movie'

export const fetchMoviesBySearch = createAsyncThunk(
  `${sliceName}/fetchMoviesBySearch`,
  async (searchTerm = '', page = 1, type = '', year = '') => {
    const response = await movieAPI.fetchBySearch(searchTerm, page, type, year)
    return { ...response, searchTerm }
  }
)

export const slice = createSlice({
  name: sliceName,
  initialState: {
    searchTerm: '',
    entities: [],
    totalEntities: 0,
    error: null,
    loading: false,
  },
  extraReducers: {
    [fetchMoviesBySearch.pending]: (state) => {
      state.searchTerm = ''
      state.entities = []
      state.totalEntities = 0
      state.error = null
      state.loading = true
    },
    [fetchMoviesBySearch.fulfilled]: (state, action) => {
      state.searchTerm = action.payload.searchTerm
      state.entities = action.payload.Search
      state.totalEntities = action.payload.totalResults
      state.loading = false
    },
    [fetchMoviesBySearch.rejected]: (state, action) => {
      state.error = action.error
      state.loading = false
    },
  },
})

export default slice.reducer
