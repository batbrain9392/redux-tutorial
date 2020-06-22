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
      backgroundColor: grey['300'],
    },
  },
}))

const ListItem = ({ entity }) => {
  const classes = useStyles()
  const history = useHistory()

  const goToDetails = (id) => {
    history.push(`/${id}`)
  }

  return (
    <ButtonBase
      className={classes.root}
      onClick={entity ? () => goToDetails(entity.imdbID) : null}>
      <ImageWithLoading src={entity?.Poster} alt={entity?.Title} />
      <Typography component='div'>
        <Box fontSize={17} lineHeight='normal' mt={1} px={1}>
          {entity ? entity.Title : <Skeleton />}
        </Box>
      </Typography>
      <Typography variant='body2' color='textSecondary' component='div'>
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
