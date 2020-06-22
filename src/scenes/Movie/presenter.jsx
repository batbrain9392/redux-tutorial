import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Body from './components/Body'
import ScrollToTopOnMount from '../../components/ScrollToTopOnMount'

const Movie = ({ entity, error, loading }) => {
  return (
    <>
      <ScrollToTopOnMount />
      <Container>
        {error ? (
          <Typography variant='body1' color='textSecondary'>
            {error}
          </Typography>
        ) : (
          <Body entity={entity} loading={loading} />
        )}
      </Container>
    </>
  )
}

export default Movie
