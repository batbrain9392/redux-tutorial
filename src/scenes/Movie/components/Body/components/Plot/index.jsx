import React from 'react'
import Typography from '@material-ui/core/Typography'
import Skeleton from '@material-ui/lab/Skeleton'

const Plot = ({ entity }) => {
  return (
    <Typography variant='body1'>
      {entity ? (
        entity.Plot
      ) : (
        <>
          {Array.from(new Array(3)).map((_, i) => (
            <Skeleton key={i} />
          ))}
          <Skeleton width='50%' />
        </>
      )}
    </Typography>
  )
}

export default Plot
