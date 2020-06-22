import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'
import ErrorIcon from '@material-ui/icons/Error'
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  withChildren: {
    '& > div': {
      visibility: 'initial',
      height: '100%',
      display: 'grid',
      justifyItems: 'center',
      alignContent: 'center',
      gridRowGap: theme.spacing(1),
    },
  },
}))

const ImageWithLoading = ({
  src,
  alt,
  height,
  isLoading,
  isError,
  onLoad,
  onError,
}) => {
  const classes = useStyles()

  return (
    <>
      {(isLoading || isError) && (
        <Skeleton
          variant='rect'
          width='100%'
          height={height || '100%'}
          animation={!isError && 'pulse'}
          classes={classes}>
          {isError && (
            <Typography variant='body1' color='textSecondary' component='div'>
              <ErrorIcon />
              <span>No image</span>
            </Typography>
          )}
        </Skeleton>
      )}
      {!isError && (
        <img
          style={{
            width: '100%',
            display: isLoading ? 'none' : 'block',
            height: '100%',
            objectFit: 'cover',
          }}
          src={src}
          alt={alt || 'Movie poster'}
          onLoad={onLoad}
          onError={onError}
        />
      )}
    </>
  )
}

export default ImageWithLoading
