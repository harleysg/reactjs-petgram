import React, {useContext} from 'react'
import { Redirect, Router } from '@reach/router'

import {Context} from '../Context'

import { Home } from "./Home";
import { Detail } from "./Detail";
import { Favs } from "./Favs";
import { NotFound } from './NotFound'
import { NotRegistered } from "./NotRegister";
import { User } from "./User";

export function Routes () {
  const { isAuth } = useContext(Context)
  return <>
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
  </>
}