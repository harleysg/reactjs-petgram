import React, { Suspense, useContext } from 'react'
import { Redirect, Router } from '@reach/router'

import { Context } from './Context'

import {
  Home,
  Detail,
  Favs,
  NotFound,
  NotRegistered,
  User,
} from './pages'


export function Routes () {
  const { isAuth } = useContext(Context)
  return <Suspense fallback={'Loading page... 🐱‍👤'}>
    <Router>
      <NotFound default />
      <Home path='/' />
      <Home path='/pet/:id' />
      <Detail path='/detail/:id' />
      {!isAuth && <NotRegistered path='/login' />}
      {!isAuth && <Redirect from='/favs' to='/login' />}
      {!isAuth && <Redirect from='/user' to='/login' />}
      {isAuth && <Redirect from='/login' to='/' />}
      <Favs path='favs' />
      <User path='user' />
    </Router>
  </Suspense>
}