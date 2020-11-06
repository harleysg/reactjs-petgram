import React from 'react'

import { Layout } from '../../components'
import { PhotoCardWithQuery } from '../../containers/PhotoCardWithQuery'

export function Detail ({id}) {
  return <Layout title={`Photo ${id}`}>
    <PhotoCardWithQuery id={id}/>
  </Layout>
}