import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'

const ImageWithLoading = ({
  src,
  alt,
  height,
  imgLoading,
  onLoad,
  onError,
}) => {
  return (
    <>
      {src && (
        <img
          style={{
            width: '100%',
            display: imgLoading ? 'none' : 'block',
            height: '100%',
            objectFit: 'cover',
          }}
          src={src}
          alt={alt || 'Movie poster'}
          onLoad={onLoad}
          onError={onError}
        />
      )}
      {imgLoading && <Skeleton variant='rect' height={height || '100%'} />}
    </>
  )
}

export default ImageWithLoading
