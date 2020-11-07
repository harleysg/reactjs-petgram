import React from 'react'
import PropTypes from 'prop-types'

import { Button } from './styles'

import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Button onClick={onClick}>
      <Icon size='24px' /> {likes} likes!
    </Button>
  )
}

FavButton.PropTypes = {
  liked: PropTypes.bool,
  likes: PropTypes.number,
  onClick: PropTypes.func
}