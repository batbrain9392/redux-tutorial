import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import movieAPI from './api'
import { getSource } from '../axios'

const sliceName = 'movie'

export const fetchMoviesBySearch = createAsyncThunk(
  `${sliceName}/fetchMoviesBySearch`,
  async (_, { getState, signal }) => {
    const source = getSource()
    signal.addEventListener('abort', () => source.cancel())
    const { searchTerm, page, type } = getState().filter
    const result = await movieAPI.fetchBySearch(
      searchTerm,
      page,
      type,
      source.token
    )
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
    resetMovies: () => ({
      entities: [],
      totalEntities: 0,
      error: '',
      loading: false,
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
