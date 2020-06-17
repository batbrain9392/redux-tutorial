import React from 'react'
import Typography from '@material-ui/core/Typography'

const SearchMetaData = ({ totalEntities, error }) => {
  return (
    <Typography variant='body2' color='textSecondary'>
      {error ? 'No' : totalEntities} results found
    </Typography>
  )
}

export default SearchMetaData
