import React from 'react'
import { useHistory } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Skeleton from '@material-ui/lab/Skeleton'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    cursor: 'pointer',
  },
}))

const ListItem = ({ entity }) => {
  const classes = useStyles()
  const history = useHistory()

  const goToDetails = (id) => {
    history.push(`/${id}`)
  }

  return entity ? (
    <div className={classes.root} onClick={() => goToDetails(entity.imdbID)}>
      <img
        style={{ width: '100%', height: 350, objectFit: 'cover' }}
        alt={entity.Title}
        src={entity.Poster}
      />
      <Typography variant='body1' component='div' gutterBottom>
        <Box fontWeight='fontWeightMedium'>{entity.Title}</Box>
      </Typography>
      <Typography variant='body2' color='textSecondary'>
        {`${entity.Type.toUpperCase()} • ${entity.Year}`}
      </Typography>
    </div>
  ) : (
    <div>
      <Skeleton variant='rect' height={350} />
      <Skeleton height={32} />
      <Skeleton height={24} width='60%' />
    </div>
  )
}

export default ListItem
