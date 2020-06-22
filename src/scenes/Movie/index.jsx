import React from 'react'
import Movie from './presenter'
import { useParams } from 'react-router-dom'
import { useGetMovie } from './hooks'

export default () => {
  const { id } = useParams()
  const { data, error, loading } = useGetMovie(id)

  return <Movie entity={data} error={error} loading={loading} />
}
