import React from 'react'
import Box from '@material-ui/core/Box'
import Skeleton from '@material-ui/lab/Skeleton'

const Info = ({ label, value, first }) => {
  return (
    <Box mt={first ? 0 : 2}>
      {value ? (
        <Box component='span' display='flex'>
          <Box component='span' fontWeight='fontWeightBold' mr={1.5}>
            {`${label}:`}
          </Box>
          <span>{value}</span>
        </Box>
      ) : (
        <Skeleton width='80%' />
      )}
    </Box>
  )
}

export default Info
