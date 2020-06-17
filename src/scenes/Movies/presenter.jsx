import React from 'react'
import SearchForm from './components/SearchForm'
import Description from './components/Description'
import FilterForm from './components/FilterForm'
import SearchMetaData from './components/SearchMetaData'
import List from './components/List'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import Container from '@material-ui/core/Container'

const Movies = ({ entities, totalEntities, error, loading }) => {
  return (
    <>
      <Container>
        <Typography variant='h2' gutterBottom>
          <span role='img' aria-label='popcorn emoji'>
            🍿
          </span>
          Movies
        </Typography>
        <Box mb={3}>
          <SearchForm />
        </Box>
      </Container>
      {!totalEntities && !error ? (
        <Container>
          <Box mt={3}>
            <Description />
          </Box>
        </Container>
      ) : (
        <>
          {/* <FilterForm /> */}
          <Divider />
          <Container>
            <Box mt={3} mb={5}>
              <SearchMetaData
                totalEntities={totalEntities}
                error={error}
                loading={loading}
              />
            </Box>
            <List entities={entities} />
          </Container>
        </>
      )}
    </>
  )
}

export default Movies
