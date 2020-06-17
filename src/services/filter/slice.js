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
    }),
    resetSearchTerm: (state) => ({
      ...state,
      searchTerm: '',
    }),
    setFilters: (state, action) => ({
      ...state,
      page: action.payload.page,
      type: action.payload.type,
      year: action.payload.year,
    }),
    resetFilters: (state) => ({
      ...state,
      page: 1,
      type: '',
      year: '',
    }),
  },
})

export const {
  setSearchTerm,
  resetSearchTerm,
  setFilters,
  resetFilters,
} = slice.actions

export default slice.reducer
