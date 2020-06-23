import React from 'react'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import ImageWithLoading from '../../../../components/ImageWithLoading'
import Heading from './components/Heading'
import Plot from './components/Plot'
import ImportantInfo from './components/ImportantInfo'
import Rating from './components/Rating'
import AdditionalInfo from './components/AdditionalInfo'

const Body = ({ entity, loading }) => {
  return (
    <>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={5} md={3}>
          <ImageWithLoading
            src={entity?.Poster}
            alt={entity?.Title}
            height={350}
          />
        </Grid>
        <Grid item xs={12} sm={7} md={9}>
          <Heading entity={entity} />
          <Plot entity={entity} />
          <ImportantInfo entity={entity} loading={loading} />
        </Grid>
      </Grid>
      <Box my={7}>
        <Rating entity={entity} />
      </Box>
      <Box mt={3}>
        <AdditionalInfo entity={entity} loading={loading} />
      </Box>
    </>
  )
}

export default Body
