import React from 'react'
import Typography from '@material-ui/core/Typography'
import Skeleton from '@material-ui/lab/Skeleton'

const SearchMetaData = ({ totalEntities, error, loading }) => {
  return loading ? (
    <Skeleton height={20} width='25%' />
  ) : (
    <Typography variant='body2' color='textSecondary'>
      {error ? 'No' : totalEntities} results found
    </Typography>
  )
}

export default SearchMetaData
