import React from 'react'
import { FavsWithQuery } from '../../containers'
import { Layout } from '../../components'

export function Favs () {
  return <Layout
    title="Your favorites"
    subtitle='Tus fotos de animales domésticos favoritos'>
    <FavsWithQuery />
  </Layout>
}