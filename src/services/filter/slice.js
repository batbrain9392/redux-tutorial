import { createSlice } from '@reduxjs/toolkit'

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
    resetSearch: () => ({
      searchTerm: '',
      page: 1,
      type: '',
    }),
    setPage: (state, action) => ({
      ...state,
      page: action.payload,
    }),
    setType: (state, action) => ({
      ...state,
      type: action.payload,
      page: 1,
    }),
    resetType: (state) => ({
      ...state,
      type: '',
      page: 1,
    }),
  },
})

export const {
  setSearchTerm,
  resetSearch,
  setPage,
  setType,
  resetType,
} = slice.actions

export default slice.reducer
