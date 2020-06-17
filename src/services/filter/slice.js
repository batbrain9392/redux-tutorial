import { createSlice } from '@reduxjs/toolkit'

const sliceName = 'filter'

export const slice = createSlice({
  name: sliceName,
  initialState: {
    searchTerm: '',
    page: 1,
    type: '',
    year: '',
  },
  reducers: {
    setSearchTerm: (state, action) => ({
      ...state,
      searchTerm: action.payload,
      page: 1,
    }),
    resetSearchTerm: () => ({
      searchTerm: '',
      page: 1,
      type: '',
      year: '',
    }),
    setPage: (state, action) => ({
      ...state,
      page: action.payload,
    }),
    setFilters: (state, action) => ({
      ...state,
      type: action.payload.type,
      year: action.payload.year,
    }),
    resetFilters: (state) => ({
      ...state,
      type: '',
      year: '',
    }),
  },
})

export const {
  setSearchTerm,
  resetSearchTerm,
  setPage,
  setFilters,
  resetFilters,
} = slice.actions

export default slice.reducer
