import { useEffect, memo } from 'react'

const ScrollToTopOnMount = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return null
}

export default memo(ScrollToTopOnMount)
