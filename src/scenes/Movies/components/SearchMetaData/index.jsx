import React from 'react'
import Typography from '@material-ui/core/Typography'

const SearchMetaData = ({ totalEntities, error, loading }) => {
  if (loading) return null

  if (error) return null

  return (
    !!totalEntities && (
      <Typography variant='body2' color='textSecondary'>
        {totalEntities} results found
      </Typography>
    )
  )
}

export default SearchMetaData
