import React from 'react'
import Stream from './components/Stream'

const tracks = [
  {
    title: 'Some track',
  },
  {
    title: 'Some other track',
  },
]

function App() {
  return <Stream tracks={tracks} />
}

export default App
