import { useQuery } from '@apollo/react-hooks'
import { getFavs } from '../hocs/getFavs'

export const useFavsQuery = () => {
  const { loading, error, data: {favs = []} = {} } = useQuery(getFavs)
  return {
    loading,
    error,
    favs
  }
}