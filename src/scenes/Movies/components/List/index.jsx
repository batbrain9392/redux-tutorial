import React from 'react'
import ListItem from './components/ListItem'
import { makeStyles } from '@material-ui/core/styles'
import Pagination from './components/Pagination'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr));',
    gridGap: theme.spacing(3),
  },
}))

const List = ({ entities }) => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.root}>
        {entities.map((entity) => (
          <ListItem key={entity.imdbID} entity={entity} />
        ))}
      </div>
      <Box mt={5}>
        <Pagination />
      </Box>
    </>
  )
}

export default List
