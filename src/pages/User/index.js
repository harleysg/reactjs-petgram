import React, { useContext } from 'react'

import { Context } from '../../Context'
import { Button } from "../../components";
import { Grid } from './styles'

export function User () {
  const { removeAuth } = useContext(Context)
  return <Grid>
    <h3>Profile</h3>
    <Button onClick={removeAuth}>Logout</Button>
  </Grid>
}