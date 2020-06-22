import React from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import MuiLink from '@material-ui/core/Link'
import { Link } from 'react-router-dom'

const Header = ({ replace }) => {
  return (
    <Container>
      <Typography variant='h2'>
        <MuiLink
          color='inherit'
          underline='none'
          component={Link}
          to='/'
          replace={replace}>
          <span role='img' aria-label='popcorn emoji'>
            🍿
          </span>
          Movies
        </MuiLink>
      </Typography>
    </Container>
  )
}

export default Header
