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

export const search = (searchTerm) => async (dispatch, getState) => {
  dispatch(setSearchTerm(searchTerm))
  const {
    filter: { page, type },
  } = getState()
  dispatch(fetchMoviesBySearch({ searchTerm, page, type }))
}

export const resetSearch = () => async (dispatch) => {
  dispatch(resetFilters())
  dispatch(resetMovies())
}

export const setPage = (page) => async (dispatch, getState) => {
  dispatch(setPageState(page))
  const {
    filter: { searchTerm, type },
  } = getState()
  dispatch(fetchMoviesBySearch({ searchTerm, page, type }))
}

export const setType = (type) => async (dispatch, getState) => {
  dispatch(setTypeState(type))
  const {
    filter: { searchTerm, page },
  } = getState()
  dispatch(fetchMoviesBySearch({ searchTerm, page, type }))
}

export default slice.reducer
