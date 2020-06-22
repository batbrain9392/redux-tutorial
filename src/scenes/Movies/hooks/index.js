import { useLocation } from 'react-router-dom'

export const useQuery = () => {
  const { search } = useLocation()
  return new URLSearchParams(search)
}
