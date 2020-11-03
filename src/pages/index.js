import React from 'react'
import { Router } from '@reach/router'

import Context from '../Context'

import { Home } from "./Home";
import { Detail } from "./Detail";
import { Favs } from "./Favs";
import { User as Profile } from "./User";
import { NotRegistered } from "./NotRegister";

export function Routes () {
  return <>
    <Router>
      <Home path='/' />
      <Home path='/pet/:id' />
      <Detail path='/detail/:id' />
    </Router>
    <Context.Consumer>
      {
        ({ isAuth }) =>
          isAuth
            ? <Router>
              <Favs path='favs' />
              <Profile path='user' />
            </Router>
              : <Router>
                <NotRegistered path='favs' />
                <NotRegistered path='user' />
            </Router>
        }
    </Context.Consumer>
  </>
}