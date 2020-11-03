import React, { Fragment, useState, useCallback } from 'react'
import { Link } from "@reach/router";
import { Article, Button, Img, ImgWrapper } from './styles'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { useNearScreen, useToogleLike } from '../../hooks'

// const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
const SIZE_ICONS = '24px'

export const PhotoCard = ({ id = 0, liked: initialLiked, likes = 0, src }) => {
  const [countLikes, setCountLikes] = useState(likes)
  const [liked, setLiked] = useState(initialLiked)
  const [show, ref] = useNearScreen()
  const {handleLikePhoto} = useToogleLike()

  const onClickLike = useCallback(() => {
    const op = liked ? -1 : 1
    setCountLikes(countLikes + op)
    setLiked(!liked)
  }, [liked])
  
  const FavIcon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={ref}>
      {show &&
        <Fragment>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>

          <Button onClick={() => {
              handleLikePhoto({ id })
              onClickLike()
            }} >
            <FavIcon size={SIZE_ICONS} /> {countLikes} likes!
          </Button>
        </Fragment>
      }
    </Article>
  )
}