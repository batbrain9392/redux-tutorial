import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({ entity }) => {
  return (
    <Link to={`/${entity.imdbID}`}>
      <pre>{JSON.stringify(entity, null, 2)}</pre>
    </Link>
  )
}

export default ListItem
