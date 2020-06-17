import React from 'react'
import Movies from './presenter'
import { useSelector, shallowEqual } from 'react-redux'

export default () => {
  const { entities, totalEntities, error, loading } = useSelector(
    (state) => state.movie,
    shallowEqual
  )

  return (
    <Movies
      entities={entities}
      totalEntities={totalEntities}
      error={error}
      loading={loading}
    />
  )
}
