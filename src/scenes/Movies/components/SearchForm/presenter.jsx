import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import ClearIcon from '@material-ui/icons/Clear'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px 2px 10px',
    display: 'flex',
    alignItems: 'center',
    maxWidth: 600,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}))

const SearchForm = ({ input, setInput, error, onSubmit, onReset }) => {
  const classes = useStyles()

  return (
    <Paper
      component='form'
      className={classes.root}
      onSubmit={onSubmit}
      onReset={onReset}>
      <InputBase
        className={classes.input}
        placeholder='Search movies'
        inputProps={{ 'aria-label': 'search movies' }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        autoFocus
      />
      {input && (
        <IconButton
          className={classes.iconButton}
          aria-label='clear'
          type='reset'>
          <ClearIcon />
        </IconButton>
      )}
      <Divider className={classes.divider} orientation='vertical' />
      <IconButton
        className={classes.iconButton}
        aria-label='search'
        type='submit'>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default SearchForm
