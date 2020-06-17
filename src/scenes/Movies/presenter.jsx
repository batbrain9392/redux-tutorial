import React from 'react'
import SearchForm from './components/SearchForm'
import FilterForm from './components/FilterForm'
import ListItem from './components/ListItem'

const Movies = ({ entities, totalEntities, error, loading }) => {
  return (
    <div>
      <SearchForm />
      <FilterForm />
      <pre>{JSON.stringify({ totalEntities, error, loading }, null, 2)}</pre>
      {entities.map((entity) => (
        <ListItem key={entity.imdbID} entity={entity} />
      ))}
    </div>
  )
}

export default Movies
