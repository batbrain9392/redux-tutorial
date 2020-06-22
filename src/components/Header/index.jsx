import React from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

const Header = () => {
  return (
    <Container>
      <Typography variant='h2'>
        <span role='img' aria-label='popcorn emoji'>
          🍿
        </span>
        Movies
      </Typography>
    </Container>
  )
}

export default Header
