import React, { Fragment, useContext } from 'react'
import { Context } from '../../Context'
import { UserForm } from '../../components'
import { useRegister, useLogin  } from '../../hooks'

export const NotRegistered = () => {
  const { activateAuth } = useContext(Context)
  const {errorRegister, LoginRegister, register} = useRegister()
  const {errorLogin, loadingLogin, login} = useLogin()

  const handleRegister = ({ email, password }) => {
    register({ email, password }).then(({ data }) => activateAuth(data.signup))
  }

  const handleLogin = (formData) => {
    login(formData).then(({ data }) => activateAuth(data.login))
  }

  return (
    <Fragment>
      <UserForm 
        disabled={LoginRegister}
        error={errorRegister}
        title='Registrarse'
        onSubmit={handleRegister} />
      <UserForm 
        disabled={loadingLogin}
        error={errorLogin}
        title='Iniciar sesión'
        onSubmit={handleLogin} />
    </Fragment>
  )
}
