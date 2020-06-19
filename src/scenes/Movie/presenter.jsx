import React from 'react'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Body from './components/Body'

const Movie = ({ entity, error }) => {
  return (
    <Container>
      <Box mb={5}>
        <Button startIcon={<ArrowBackIosIcon />} component={Link} to='/'>
          Back to search
        </Button>
      </Box>
      {error ? (
        <Typography variant='body1' color='textSecondary'>
          {error}
        </Typography>
      ) : (
        <Body entity={entity} />
      )}
    </Container>
  )
}

export default Movie
