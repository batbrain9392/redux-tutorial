import React from 'react'
import Pagination from './presenter'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { setPage } from '../../../../../../services/filter/slice'
import { fetchMoviesBySearch } from '../../../../../../services/movie/slice'

export default () => {
  const { searchTerm, page, type, year } = useSelector(
    (state) => state.filter,
    shallowEqual
  )
  const count = useSelector((state) =>
    Math.ceil(state.movie.totalEntities / 10)
  )
  const dispatch = useDispatch()

  const onPageChangeHandler = (_, selectedPage) => {
    dispatch(setPage(selectedPage))
    dispatch(
      fetchMoviesBySearch({ searchTerm, page: selectedPage, type, year })
    )
  }

  return (
    count > 1 && (
      <Pagination
        count={count}
        page={page}
        onPageChange={onPageChangeHandler}
      />
    )
  )
}
