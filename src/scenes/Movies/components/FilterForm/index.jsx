import React from 'react'
import FilterForm from './presenter'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { setType, resetType } from '../../../../services/filter/slice'
import { fetchMoviesBySearch } from '../../../../services/movie/slice'

export default () => {
  const { searchTerm, page, type } = useSelector(
    (state) => state.filter,
    shallowEqual
  )
  const loading = useSelector((state) => state.movie.loading)
  const dispatch = useDispatch()

  const onFilterHandler = (selectedType) => {
    dispatch(setType(selectedType))
    dispatch(fetchMoviesBySearch({ searchTerm, page, type: selectedType }))
  }

  const onResetFilterHandler = () => {
    dispatch(resetType())
    dispatch(fetchMoviesBySearch({ searchTerm, page, type: '' }))
  }

  return (
    <FilterForm
      loading={loading}
      type={type}
      onFilter={onFilterHandler}
      onResetFilter={onResetFilterHandler}
    />
  )
}
