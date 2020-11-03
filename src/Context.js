import React, { createContext, useState } from 'react'
import { navigate } from '@reach/router'

export const Context = createContext()

export const Provider = ({ children }) => {
  const initialAuth = Boolean(window.localStorage.getItem('token'))
  const [isAuth, setIsAuth] = useState(initialAuth)

  const value = {
    isAuth,
    activateAuth: (token) => {
      setIsAuth(true)
      window.sessionStorage.setItem('token', token)
      navigate('/')
    },

    removeAuth: () => {
      setIsAuth(false)
      window.sessionStorage.removeItem('token')
      navigate('/')
    }
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default {
  Provider,
  Consumer: Context.Consumer
}