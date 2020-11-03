import { gql, useMutation } from '@apollo/client'

const LOGIN = gql`
mutation login($input: UserCredentials!) {
  login(input: $input)
}`

export const useLogin = () => {
  const [mutation, {data, loadingLogin, error}] = useMutation(LOGIN)
  function login({ email, password }) {
    return mutation({ variables: { input : { email, password } } })
  }
  const errorLogin = error && 'No se puede iniciar sesión. El usuario no existe o el password no es correcto.'
  return {login, data, loadingLogin, errorLogin}
}
