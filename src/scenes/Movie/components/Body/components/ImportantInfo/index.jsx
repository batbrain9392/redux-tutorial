import React from 'react'
import Box from '@material-ui/core/Box'
import Info from '../Info'

const ImportantInfo = ({ entity, loading }) => {
  return (
    <Box mt={3}>
      <Info loading={loading} label='Director' value={entity?.Director} first />
      <Info loading={loading} label='Writer' value={entity?.Writer} />
      <Info loading={loading} label='Actors' value={entity?.Actors} />
    </Box>
  )
}

export default ImportantInfo
