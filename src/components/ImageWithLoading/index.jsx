import React, { useState } from 'react'
import Skeleton from '@material-ui/lab/Skeleton'

const ImageWithLoading = ({ src, alt, height }) => {
  const [imgLoading, setImgLoading] = useState(true)

  return (
    <>
      {src && (
        <img
          style={{
            width: '100%',
            display: imgLoading ? 'none' : 'block',
            height: height || 'auto',
            objectFit: 'cover',
          }}
          src={src}
          alt={alt || 'Movie poster'}
          onLoad={() => setImgLoading(false)}
          onError={() => setImgLoading(false)}
        />
      )}
      {imgLoading && <Skeleton variant='rect' height={height || 350} />}
    </>
  )
}

export default ImageWithLoading
