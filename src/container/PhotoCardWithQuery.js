import React from 'react'
import { useQuery } from '@apollo/react-hooks'

import { getSinglePhoto } from '../hocs/getSinglePhoto'

import { PhotoCard } from '../components'

export const PhotoCardWithQuery = ({id}) => {
  const { loading, error, data: {photo = []} = {} } = useQuery(getSinglePhoto, { variables: { id } })
  
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error! ⛔: {error.message}</p>
  return <PhotoCard {...photo} />
}