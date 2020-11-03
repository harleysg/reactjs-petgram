import React, { useContext } from 'react'

import { Context } from '../../Context'
import { Button } from "../../components";

export function User () {
  const { removeAuth } = useContext(Context)
  return <>
    <h3>Profile</h3>
    <Button onClick={removeAuth}>Logout</Button>
  </>
}