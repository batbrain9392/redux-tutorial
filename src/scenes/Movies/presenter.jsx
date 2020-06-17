import React from 'react'
import SearchForm from './components/SearchForm'
import FilterForm from './components/FilterForm'

const Movies = ({ entities, totalEntities, error, loading }) => {
  return (
    <div>
      <SearchForm />
      <FilterForm />
      <pre>
        {JSON.stringify({ totalEntities, error, loading, entities }, null, 2)}
      </pre>
    </div>
  )
}

export default Movies
