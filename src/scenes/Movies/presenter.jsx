import React from 'react'
import SearchForm from './components/SearchForm'
import FilterForm from './components/FilterForm'
import SearchMetaData from './components/SearchMetaData'
import List from './components/List'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'

const Movies = ({ entities, totalEntities, error, loading }) => {
  return (
    <>
      <Typography variant='h2' gutterBottom>
        <span role='img' aria-label='popcorn emoji'>
          🍿
        </span>
        Movies
      </Typography>
      <Box mb={3}>
        <SearchForm />
      </Box>
      {/* <FilterForm /> */}
      {(!!totalEntities || error) && <Divider />}
      <Box mt={2} mb={5}>
        <SearchMetaData
          totalEntities={totalEntities}
          error={error}
          loading={loading}
        />
      </Box>
      <List entities={entities} />
    </>
  )
}

export default Movies
