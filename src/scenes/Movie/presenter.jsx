import React from 'react'

const Movie = ({ entity, error, loading, goBackToMovies }) => {
  return (
    <div>
      <button onClick={goBackToMovies}>
        <span role='img' aria-label='back'>
          🔙
        </span>
      </button>
      <pre>{JSON.stringify({ entity, error, loading }, null, 2)}</pre>
    </div>
  )
}

export default Movie
