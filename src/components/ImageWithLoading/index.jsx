import React, { useState } from 'react'
import Skeleton from '@material-ui/lab/Skeleton'

const ImageWithLoading = ({ src, alt }) => {
  const [imgLoading, setImgLoading] = useState(true)

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
          onLoad={() => setImgLoading(false)}
          onError={() => setImgLoading(false)}
        />
      )}
      {imgLoading && <Skeleton variant='rect' height='100%' />}
    </>
  )
}

export default ImageWithLoading
