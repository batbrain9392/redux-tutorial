import React from 'react'
import FilterForm from './presenter'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { setFilters, resetFilters } from '../../../../services/filter/slice'
import { fetchMoviesBySearch } from '../../../../services/movie/slice'

export default () => {
  const { searchTerm, page, type, year } = useSelector(
    (state) => state.filter,
    shallowEqual
  )
  const dispatch = useDispatch()

  const onFilterHandler = (type, year) => {
    dispatch(setFilters({ type, year }))
    dispatch(fetchMoviesBySearch({ searchTerm, page, type, year }))
  }

  const onResetFilterHandler = () => {
    dispatch(resetFilters())
    dispatch(fetchMoviesBySearch({ searchTerm, page, type, year }))
  }

  return (
    <FilterForm
      filterValues={{ type, year }}
      onFilter={onFilterHandler}
      onResetFilter={onResetFilterHandler}
    />
  )
}
