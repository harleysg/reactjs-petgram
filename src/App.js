import React from 'react'

import { Routes } from './routes'
import { Logo, NavBar } from './components'

import { GlobalStyles } from "./styles";

import { Helmet } from 'react-helmet'

export function  App () {
  return <>
    <Helmet>
        <title>Petgram - Fotos de animales</title>
        <meta name='description' content='Tu aplicación para descubrir fotos de animales domésticos, hecha con React ⚛️' />
    </Helmet>
    <GlobalStyles/>
    <Logo />
      <Routes />
    <NavBar />
  </>
}