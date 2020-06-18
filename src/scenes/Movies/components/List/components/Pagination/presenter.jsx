import React from 'react'
import MuiPagination from '@material-ui/lab/Pagination'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  ul: {
    justifyContent: 'center',
  },
}))

const Pagination = ({ count, page, onPageChange }) => {
  const classes = useStyles()

  return (
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
  )
}

export default Pagination
