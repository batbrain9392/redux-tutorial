import React from 'react'
import Header from './presenter'
import { useLocation } from 'react-router-dom'

export default () => {
  const { pathname } = useLocation()

  return <Header replace={pathname === '/'} />
}
