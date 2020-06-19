import React from 'react'
import Grid from '@material-ui/core/Grid'
import Skeleton from '@material-ui/lab/Skeleton'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import ImageWithLoading from '../../../../components/ImageWithLoading'
import Info from '../Info'

const Body = ({ entity }) => {
  return (
    <>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={5} md={3}>
          <ImageWithLoading src={entity?.Poster} alt={entity?.Title} />
        </Grid>
        <Grid item xs={12} sm={7} md={9}>
          <Box mb={2}>
            <Typography variant='h4' gutterBottom>
              {entity ? entity.Title : <Skeleton width='60%' />}
            </Typography>
            <Typography variant='subtitle1' color='textSecondary'>
              {entity ? (
                `${entity.Type.toUpperCase()} • ${entity.Year}`
              ) : (
                <Skeleton width='20%' />
              )}
            </Typography>
          </Box>
          <Typography variant='body1'>
            {entity ? (
              entity.Plot
            ) : (
              <>
                {Array.from(new Array(3)).map((_, i) => (
                  <Skeleton key={i} />
                ))}
                <Skeleton width='50%' />
              </>
            )}
          </Typography>
          <Box mt={3}>
            <Info label='Director' value={entity?.Director} first />
            <Info label='Writer' value={entity?.Writer} />
            <Info label='Actors' value={entity?.Actors} />
          </Box>
        </Grid>
      </Grid>
      <Box my={7}>
        <Grid container spacing={3}>
          {(entity ? entity.Ratings.slice(0, 3) : Array.from(new Array(3))).map(
            (rating, i) => (
              <React.Fragment key={rating?.Source || i}>
                {!!i && <Divider orientation='vertical' flexItem />}
                <Grid item xs>
                  <Box py={2}>
                    <Typography variant='h5' gutterBottom component='div'>
                      <Box textAlign='center'>
                        {rating ? (
                          rating.Value
                        ) : (
                          <Skeleton width='40%' style={{ margin: 'auto' }} />
                        )}
                      </Box>
                    </Typography>
                    <Typography variant='body1' component='div'>
                      <Box textAlign='center'>
                        {rating ? (
                          rating.Source
                        ) : (
                          <Skeleton width='80%' style={{ margin: 'auto' }} />
                        )}
                      </Box>
                    </Typography>
                  </Box>
                </Grid>
              </React.Fragment>
            )
          )}
        </Grid>
      </Box>
      <Box mt={3}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <Info label='Awards' value={entity?.Awards} first />
            <Info label='Rating' value={entity?.Rated} />
            <Info label='Release Date' value={entity?.Released} />
            <Info label='Runtime' value={entity?.Runtime} />
            <Info label='Genre' value={entity?.Genre} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Info label='Language' value={entity?.Language} first />
            <Info label='Country' value={entity?.Country} />
            <Info label='DVD Release Date' value={entity?.DVD} />
            <Info label='Box Office Collection' value={entity?.BoxOffice} />
            <Info label='Production' value={entity?.Production} />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Body
