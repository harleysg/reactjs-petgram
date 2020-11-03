import React from 'react'

import { useFavsQuery } from "../hooks";

import { ListOfFavs } from '../components'

export const FavsWithQuery = () => {
  const { loading, error, favs } = useFavsQuery()
  
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error! ⛔: {error.message}</p>
  return <ListOfFavs favs={favs} />
}