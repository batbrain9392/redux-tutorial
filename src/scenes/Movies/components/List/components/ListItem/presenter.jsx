import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import { blue, pink, green } from '@material-ui/core/colors'
import MovieIcon from '@material-ui/icons/Movie'
import TvIcon from '@material-ui/icons/Tv'
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  cardContent: {
    display: 'flex',
  },
  blue: {
    color: theme.palette.getContrastText(blue[900]),
    backgroundColor: blue[900],
  },
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
  },
  green: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
  },
}))

const ListItem = ({ entity, goToDetails }) => {
  const classes = useStyles()

  let avatar, avatarClass
  switch (entity.Type) {
    case 'movie':
      avatar = <MovieIcon />
      avatarClass = classes.blue
      break
    case 'series':
      avatar = <ViewCarouselIcon />
      avatarClass = classes.pink
      break
    default:
      avatar = <TvIcon />
      avatarClass = classes.green
      break
  }

  return (
    <Card>
      <CardActionArea onClick={() => goToDetails(entity.imdbID)}>
        <CardMedia
          component='img'
          alt='Movie poster'
          height='350'
          image={entity.Poster}
          title={entity.Title}
        />
        <CardContent className={classes.cardContent}>
          <Box mr={2}>
            <Avatar aria-label={entity.Type} className={avatarClass}>
              {avatar}
            </Avatar>
          </Box>
          <Box>
            <Typography variant='body1'>{entity.Title}</Typography>
            <Typography variant='body2' color='textSecondary'>
              {entity.Year}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ListItem
