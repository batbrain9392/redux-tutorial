import React, { useState, useEffect } from 'react'
import Movie from './presenter'
import moviAPI from '../../services/movie/api'
import { useParams, useHistory } from 'react-router-dom'

export default () => {
  const [movie, setMovie] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  const { id } = useParams()
  const history = useHistory()

  useEffect(() => {
    const fetchMovie = async () => {
      let result
      try {
        result = await moviAPI.fetchByID(id)
        setError()
      } catch (error) {
        setError(error.message)
      }
      setMovie(result)
      setLoading(false)
    }
    fetchMovie()
  }, [id])

  const goBackToMovies = () => {
    history.push('/')
  }

  return (
    <Movie
      entity={movie}
      error={error}
      loading={loading}
      goBackToMovies={goBackToMovies}
    />
  )
}
