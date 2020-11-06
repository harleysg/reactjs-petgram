import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

export const getFavs = gql`
query getFavs {
  favs {
    id
    categoryId
    src
    likes
    userId
  }
}`

export const useFavsQuery = () => {
  const { loading, error, data = {} } = useQuery(getFavs, {fetchPolicy: "cache-and-network"})
  const { favs = [] } = data
  return {
    loading,
    error,
    favs
  }
}