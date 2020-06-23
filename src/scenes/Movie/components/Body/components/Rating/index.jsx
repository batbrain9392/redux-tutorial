import React, { memo } from 'react'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Skeleton from '@material-ui/lab/Skeleton'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'

const Rating = ({ entity }) => {
  return (
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
  )
}

export default memo(Rating)
