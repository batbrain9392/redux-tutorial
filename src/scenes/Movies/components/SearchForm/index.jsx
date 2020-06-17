import React from 'react'
import SearchForm from './presenter'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import {
  setSearchTerm,
  resetSearchTerm,
} from '../../../../services/filter/slice'
import {
  fetchMoviesBySearch,
  resetMovies,
} from '../../../../services/movie/slice'

export default () => {
  const { searchTerm, page, type, year } = useSelector(
    (state) => state.filter,
    shallowEqual
  )
  const dispatch = useDispatch()

  const onSearchHandler = (searchTerm) => {
    dispatch(setSearchTerm(searchTerm))
    dispatch(fetchMoviesBySearch({ searchTerm, page, type, year }))
  }

  const onSearchClear = () => {
    dispatch(resetSearchTerm())
    dispatch(resetMovies())
  }

  return (
    <SearchForm
      searchTerm={searchTerm}
      onSearch={onSearchHandler}
      onSearchClear={onSearchClear}
    />
  )
}
