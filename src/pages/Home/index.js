import React from 'react'

import { Layout, ListOfCategories, ListOfPhotoCards } from '../../components'

export const Home = ({ id }) => {
  return <Layout>
  <ListOfCategories/>
  <ListOfPhotoCards categoryId={id}/>
</Layout>
}