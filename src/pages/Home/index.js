import React from 'react'

import { Layout, ListOfCategories, ListOfPhotoCards } from '../../components'

const Home = ({ id }) => {
  return <Layout>
  <ListOfCategories/>
  <ListOfPhotoCards categoryId={id}/>
</Layout>
}

export default Home