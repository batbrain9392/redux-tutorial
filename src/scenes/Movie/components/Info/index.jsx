import React from 'react'
import Box from '@material-ui/core/Box'
import Skeleton from '@material-ui/lab/Skeleton'
import Typography from '@material-ui/core/Typography'

const Info = ({ label, value, first }) => {
  return (
    <Box mt={first ? 0 : 2}>
      {value ? (
        <Typography variant='body1'>
          <Box component='span' display='flex'>
            <Box component='span' fontWeight='fontWeightBold' mr={1.5}>
              {label}:
            </Box>
            <span>{value}</span>
          </Box>
        </Typography>
      ) : (
        <Skeleton width='80%' />
      )}
    </Box>
  )
}

export default Info
