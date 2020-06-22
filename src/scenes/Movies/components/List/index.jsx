import React from 'react'
import ListItem from './components/ListItem'
import { makeStyles } from '@material-ui/core/styles'
import Pagination from './components/Pagination'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr));',
    gridColumnGap: theme.spacing(4),
    gridRowGap: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
}))

const List = ({ entities, loading }) => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.root}>
        {(loading ? Array.from(new Array(3)) : entities).map((entity, i) => (
          <ListItem entity={entity} key={entity?.imdbID || i} />
        ))}
      </div>
      {!loading && <Pagination />}
    </>
  )
}

export default List
