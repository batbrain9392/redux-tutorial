import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import reactLogo from '../../assets/img/react.svg'
import reduxLogo from '../../assets/img/redux.svg'
import { makeStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'

const useStyles = makeStyles(() => ({
  img: {
    height: 24,
    verticalAlign: 'bottom',
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <Container>
      <Typography variant='body1' className={classes.root}>
        Made by{' '}
        <Tooltip title='Follow me on Twitter'>
          <Link
            href='https://twitter.com/batbrain9392'
            target='_blank'
            rel='noopener noreferrer'>
            @batbrain9392
          </Link>
        </Tooltip>{' '}
        with
        <Tooltip title='Get started with React'>
          <Link
            href='https://reactjs.org/'
            target='_blank'
            rel='noopener noreferrer'>
            <img src={reactLogo} alt='React logo' className={classes.img} />
          </Link>
        </Tooltip>
        <Tooltip title='Get started with Redux Toolkit'>
          <Link
            href='https://redux-toolkit.js.org/'
            target='_blank'
            rel='noopener noreferrer'>
            <img src={reduxLogo} alt='Redux logo' className={classes.img} />
          </Link>
        </Tooltip>
      </Typography>
    </Container>
  )
}

export default Footer
