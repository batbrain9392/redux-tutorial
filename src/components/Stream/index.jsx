import React from 'react'
import Stream from './presenter'
import { useSelector } from 'react-redux'

export default () => {
  const tracks = useSelector((state) => state.track)

  return <Stream tracks={tracks} />
}
