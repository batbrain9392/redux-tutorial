import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Skeleton from '@material-ui/lab/Skeleton'

const Heading = ({ entity }) => {
  return (
    <Box mb={2}>
      <Typography variant='h4' gutterBottom>
        {entity ? entity.Title : <Skeleton width='60%' />}
      </Typography>
      <Typography variant='subtitle1' color='textSecondary'>
        {entity ? (
          `${entity.Type.toUpperCase()} • ${entity.Year}`
        ) : (
          <Skeleton width='20%' />
        )}
      </Typography>
    </Box>
  )
}

export default Heading
