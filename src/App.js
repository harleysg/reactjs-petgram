import React from 'react'

import { Routes } from './pages'
import { Logo } from './components'

import { GlobalStyles } from "./styles";

export function  App () {
  return <>
    <GlobalStyles/>
    <Logo />
    <Routes />
  </>
}