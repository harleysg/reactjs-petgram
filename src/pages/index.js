import React from 'react'
import { Router } from '@reach/router'

import { Home } from "./Home";
import { Detail } from "./Detail";

export function Routes () {
  return <Router primary={false}>
    <Home path='/' />
    <Home path='/pet/:id' />
    <Detail path='/detail/:id' />
  </Router>
}