import React, { useEffect, useRef } from 'react'
import Movies from './presenter'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { useQuery } from './hooks'
import { search, resetSearch } from '../../services/filter/slice'

export default () => {
  const { entities, totalEntities, error, loading } = useSelector(
    (state) => state.movie,
    shallowEqual
  )
  const searchTerm = useSelector((state) => state.filter.searchTerm)
  const dispatch = useDispatch()
  const searchQueryParam = useQuery().get('search')
  const previousRequest = useRef()

  useEffect(() => {
    if (!searchQueryParam) {
      dispatch(resetSearch())
      return
    }
    if (searchQueryParam !== searchTerm) {
      if (previousRequest.current) previousRequest.current.abort()
      previousRequest.current = dispatch(search(searchQueryParam))
    }
  }, [dispatch, searchQueryParam, searchTerm])

  return (
    <Movies
      entities={entities}
      totalEntities={totalEntities}
      error={error}
      loading={loading}
    />
  )
}
