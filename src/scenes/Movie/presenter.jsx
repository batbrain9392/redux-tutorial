import React from 'react'

const Movie = ({ entity, error, loading }) => {
  return (
    <div>
      <pre>{JSON.stringify({ entity, error, loading }, null, 2)}</pre>
    </div>
  )
}

export default Movie
