import React, { useRef } from 'react'
import Pagination from './presenter'
import { useSelector, useDispatch } from 'react-redux'
import { setPage } from '../../../../../../services/filter/slice'

export default () => {
  const page = useSelector((state) => state.filter.page)
  const count = useSelector((state) =>
    Math.ceil(state.movie.totalEntities / 10)
  )
  const dispatch = useDispatch()
  const previousRequest = useRef()

  const onPageChangeHandler = (_, selectedPage) => {
    if (previousRequest.current) {
      previousRequest.current.abort()
    }
    previousRequest.current = dispatch(setPage(selectedPage))
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
