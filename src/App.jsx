import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Movie from './scenes/Movie'
import Movies from './scenes/Movies'
import GithubCorner from './components/GithubCorner'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

function App() {
  return (
    <>
      <GithubCorner url='https://github.com/batbrain9392/redux-tutorial' />
      <BrowserRouter>
        <Container>
          <Box my={5}>
            <Switch>
              <Route path='/:id' component={Movie} />
              <Route path='/' exact component={Movies} />
            </Switch>
          </Box>
        </Container>
      </BrowserRouter>
    </>
  )
}

export default App
