import React from 'react'
import Container from '@material-ui/core/Container'

const Movie = ({ entity, error, loading, goBackToMovies }) => {
  return (
    <Container>
      <button onClick={goBackToMovies}>
        <span role='img' aria-label='back'>
          🔙
        </span>
      </button>
      <pre>{JSON.stringify({ entity, error, loading }, null, 2)}</pre>
    </Container>
  )
}

export default Movie
