import { lazy } from 'react'

const Home = lazy(() => import('./Home'))
const Detail = lazy(() => import('./Detail'))
const Favs = lazy(() => import('./Favs'))
const NotFound = lazy(() => import('./NotFound'))
const NotRegistered = lazy(() => import('./NotRegister'))
const User = lazy(() => import('./User'))

export {
  Home,
  Detail,
  Favs,
  NotFound,
  NotRegistered,
  User,
}