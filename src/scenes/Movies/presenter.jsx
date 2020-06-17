import React from 'react'
import SearchForm from './components/SearchForm'
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
        {/* <FilterForm /> */}
      </Container>
      {!totalEntities && !error ? (
        <Container>
          <Box mt={3}>
            <Typography variant='subtitle1'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
              dolorum provident tenetur. Totam aperiam quisquam in, nam
              excepturi corporis illum corrupti at incidunt aliquam explicabo
              molestias? Quisquam ab vero suscipit.
            </Typography>
          </Box>
        </Container>
      ) : (
        <>
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
