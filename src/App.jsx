import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Movie from './scenes/Movie'
import Movies from './scenes/Movies'
import GithubCorner from './components/GithubCorner'
import Box from '@material-ui/core/Box'

function App() {
  return (
    <>
      <GithubCorner url='https://github.com/batbrain9392/redux-tutorial' />
      <Router>
        <Box mt={5} mb={10}>
          <Switch>
            <Route path='/:id' component={Movie} />
            <Route path='/' exact component={Movies} />
          </Switch>
        </Box>
      </Router>
    </>
  )
}

export default App
