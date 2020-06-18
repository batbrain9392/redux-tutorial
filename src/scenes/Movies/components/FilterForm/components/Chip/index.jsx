import React from 'react'
import MuiChip from '@material-ui/core/Chip'

const Chip = ({ value, label, icon, type, onClick, onDelete }) => {
  return (
    <MuiChip
      label={label}
      icon={icon}
      color={type === value ? 'secondary' : 'default'}
      onClick={() => onClick(value)}
      onDelete={type === value ? onDelete : null}
    />
  )
}

export default Chip
