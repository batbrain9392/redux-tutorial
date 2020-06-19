import { createSlice } from '@reduxjs/toolkit'
import { fetchMoviesBySearch, resetMovies } from '../movie/slice'

const sliceName = 'filter'

export const slice = createSlice({
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

export const search = (searchTerm) => async (dispatch) => {
  dispatch(setSearchTerm(searchTerm))
  dispatch(fetchMoviesBySearch())
}

export const resetSearch = () => async (dispatch) => {
  dispatch(resetFilters())
  dispatch(resetMovies())
}

export const setPage = (page) => async (dispatch) => {
  dispatch(setPageState(page))
  dispatch(fetchMoviesBySearch())
}

export const setType = (type) => async (dispatch) => {
  dispatch(setTypeState(type))
  dispatch(fetchMoviesBySearch())
}

export default slice.reducer
