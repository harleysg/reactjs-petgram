import React from 'react'

import { ListOfCategories, ListOfPhotoCards } from '../../components'

export const Home = ({ id }) => {
  return <>
  <ListOfCategories/>
  <ListOfPhotoCards categoryId={id}/>
</>
}