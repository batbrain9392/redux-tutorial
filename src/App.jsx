import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Movie from './scenes/Movie'
import Movies from './scenes/Movies'
import GithubCorner from './components/GithubCorner'
import Header from './components/Header'
import Footer from './components/Footer'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'grid',
    gridTemplateRows: 'max-content auto max-content',
    gridRowGap: theme.spacing(5),
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(3),
  },
  main: {
    paddingBottom: theme.spacing(5),
  },
  footer: {
    textAlign: 'center',
  },
}))

const App = () => {
  const classes = useStyles()

  return (
    <>
      <GithubCorner url='https://github.com/batbrain9392/redux-tutorial' />
      <Router>
        <div className={classes.root}>
          <header>
            <Header />
          </header>
          <main className={classes.main}>
            <Switch>
              <Route path='/:id' component={Movie} />
              <Route path='/' exact component={Movies} />
            </Switch>
          </main>
          <footer className={classes.footer}>
            <Footer />
          </footer>
        </div>
      </Router>
    </>
  )
}

export default App
