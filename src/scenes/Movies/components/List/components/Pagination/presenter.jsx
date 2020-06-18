import React from 'react'
import MuiPagination from '@material-ui/lab/Pagination'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles(() => ({
  ul: {
    justifyContent: 'center',
  },
}))

const Pagination = ({ count, page, onPageChange }) => {
  const classes = useStyles()

  return (
    <Box mt={5}>
      <MuiPagination
        count={count}
        page={page}
        onChange={onPageChange}
        size='large'
        showFirstButton
        showLastButton
        classes={classes}
        color='secondary'
      />
    </Box>
  )
}

export default Pagination
