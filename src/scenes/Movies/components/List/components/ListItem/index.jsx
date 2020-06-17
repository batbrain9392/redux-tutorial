import React from 'react'
import { useHistory } from 'react-router-dom'
import ListItem from './presenter'

export default ({ entity }) => {
  const history = useHistory()

  const goToDetails = (id) => {
    history.push(`/${id}`)
  }

  return <ListItem entity={entity} goToDetails={goToDetails} />
}
