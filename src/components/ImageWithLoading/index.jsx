import React, { useState } from 'react'
import ImageWithLoading from './presenter'

export default ({ src, alt, height }) => {
  const [imgLoading, setImgLoading] = useState(true)

  const onLoad = () => {
    setImgLoading(false)
  }

  const onError = () => {
    setImgLoading(false)
  }

  return (
    <ImageWithLoading
      src={src}
      alt={alt}
      height={height}
      imgLoading={imgLoading}
      onLoad={onLoad}
      onError={onError}
    />
  )
}
