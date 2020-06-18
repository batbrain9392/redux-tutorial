import React, { useState } from 'react'
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
  const [imgLoading, setImgLoading] = useState(true)

  const goToDetails = (id) => {
    history.push(`/${id}`)
  }

  return (
    <div
      className={entity ? classes.root : null}
      onClick={entity ? () => goToDetails(entity.imdbID) : null}>
      {entity && (
        <img
          style={{
            width: '100%',
            height: 350,
            objectFit: 'cover',
            display: imgLoading ? 'none' : 'block',
          }}
          alt={entity.Title}
          src={entity.Poster}
          onLoad={() => setImgLoading(false)}
          onError={() => setImgLoading(false)}
        />
      )}
      {imgLoading && <Skeleton variant='rect' height={350} />}
      <Typography component='div'>
        <Box fontSize={17} lineHeight='normal' my={1}>
          {entity ? entity.Title : <Skeleton />}
        </Box>
      </Typography>
      <Typography variant='body2' color='textSecondary'>
        {entity ? (
          `${entity.Type.toUpperCase()} • ${entity.Year}`
        ) : (
          <Skeleton width='60%' />
        )}
      </Typography>
    </div>
  )
}

export default ListItem
