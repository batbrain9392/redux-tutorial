import React, { useState, useCallback } from 'react'
import ImageWithLoading from './presenter'

export default ({ src, alt, height }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const onLoad = useCallback(() => {
    setIsLoading(false)
    setIsError(false)
  }, [])

  const onError = useCallback(() => {
    setIsLoading(false)
    setIsError(true)
  }, [])

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
