import React from 'react'
import FilterForm from './presenter'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { setFilters, resetFilters } from '../../services/filter/slice'
import { fetchMoviesBySearch } from '../../services/movie/slice'

export default () => {
  const { searchTerm, page, type, year } = useSelector(
    (state) => state.filter,
    shallowEqual
  )
  const pages = useSelector((state) => {
    const arr = []
    for (let i = 2; i <= Math.ceil(state.movie.totalEntities / 10); i++) {
      arr.push(i)
    }
    return arr
  })
  const dispatch = useDispatch()

  const onFilterHandler = (page, type, year) => {
    dispatch(setFilters({ page, type, year }))
    dispatch(fetchMoviesBySearch({ searchTerm, page, type, year }))
  }

  const onResetFilterHandler = () => {
    dispatch(resetFilters())
    dispatch(fetchMoviesBySearch({ searchTerm, page, type, year }))
  }

  return (
    <FilterForm
      filterValues={{ page, type, year }}
      pages={pages}
      onFilter={onFilterHandler}
      onResetFilter={onResetFilterHandler}
    />
  )
}
