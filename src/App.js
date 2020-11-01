import React from 'react'

import { ListOfCategories, ListOfPhotoCards, Logo } from './components'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
import { GlobalStyles } from "./styles";

export function  App () {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return <>
    <GlobalStyles/>
    <Logo />
    {
      detailId
      ? <PhotoCardWithQuery id={detailId}/>
      // ? <h1>:D</h1>
      : <>
        <ListOfCategories/>
        <ListOfPhotoCards categoryId={2}/>
      </>
    }
  </>
}