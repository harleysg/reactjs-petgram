import React, { useContext } from 'react'

import { Context } from '../../Context'
import { Button, Layout } from "../../components";
import { Grid } from './styles'

export default function User () {
  const { removeAuth } = useContext(Context)
  return (
    <Layout title='Profile'>
      <Grid>
        <Button onClick={removeAuth}>Logout</Button>
      </Grid>
    </Layout>
  )
}