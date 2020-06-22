import React, { useState } from 'react'
import ImageWithLoading from './presenter'

export default ({ src, alt, height }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const onLoad = () => {
    setIsLoading(false)
    setIsError(false)
  }

  const onError = () => {
    setIsLoading(false)
    setIsError(true)
  }

  return (
    <ImageWithLoading
      src={src}
      alt={alt}
      height={height}
      isLoading={isLoading}
      isError={isError}
      onLoad={onLoad}
      onError={onError}
    />
  )
}
