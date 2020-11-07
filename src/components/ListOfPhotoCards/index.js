import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import PropTypes from 'prop-types'

import { List, Item } from './styles'

import { PhotoCard } from '../index'

import { getPhotos } from '../../hocs/getPhotos'

export const ListOfPhotoCards = ({categoryId}) => {
  const { loading, error, data: {photos = []} = {} } = useQuery(getPhotos, { variables: { categoryId } })
  
  if (loading) return 'Cargando'
  if (error) return <p>Error</p>
  return (
    <List>
      {photos.map((photo, id) => <Item key={id}><PhotoCard {...photo} /></Item>)}
    </List>
  )
}

ListOfPhotoCards.propTypes = {
  categoryId: PropTypes.string
}