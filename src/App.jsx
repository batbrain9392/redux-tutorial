import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Movie from './scenes/Movie'
import Movies from './scenes/Movies'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/:id' component={Movie} />
        <Route path='/' exact component={Movies} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
