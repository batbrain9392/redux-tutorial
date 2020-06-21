import React from 'react'
import { useHistory } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Skeleton from '@material-ui/lab/Skeleton'
import { makeStyles } from '@material-ui/core/styles'
import ImageWithLoading from '../../../../../../components/ImageWithLoading'
import ButtonBase from '@material-ui/core/ButtonBase'
import grey from '@material-ui/core/colors/grey'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateRows: '350px max-content auto',
    justifyContent: 'normal',
    alignItems: 'start',
    gridRowGap: theme.spacing(1),
    '&:hover, &:focus': {
      boxShadow: `
        rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
        rgba(0, 0, 0, 0.14) 0px 1px 1px 0px,
        rgba(0, 0, 0, 0.12) 0px 1px 3px 0px`,
      backgroundColor: grey['200'],
    },
  },
}))

const ListItem = ({ entity, focus }) => {
  const classes = useStyles()
  const history = useHistory()

  const goToDetails = (id) => {
    history.push(`/${id}`)
  }

  return (
    <ButtonBase
      autoFocus={!!entity && focus}
      className={classes.root}
      onClick={entity ? () => goToDetails(entity.imdbID) : null}>
      <ImageWithLoading src={entity?.Poster} alt={entity?.Title} />
      <Typography component='div'>
        <Box fontSize={17} lineHeight='normal' mt={1} px={1}>
          {entity ? entity.Title : <Skeleton />}
        </Box>
      </Typography>
      <Typography variant='body2' color='textSecondary'>
        <Box px={1} mb={2}>
          {entity ? (
            `${entity.Type.toUpperCase()} • ${entity.Year}`
          ) : (
            <Skeleton width='60%' />
          )}
        </Box>
      </Typography>
    </ButtonBase>
  )
}

export default ListItem
