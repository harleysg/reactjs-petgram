import { gql, useMutation } from '@apollo/client'

const SIGNUP = gql`
mutation signup($input: UserCredentials!) {
  signup (input: $input)
}
`
export const useRegister = () => {
  const [mutation, {data, loading, error}] = useMutation(SIGNUP)
  function register ({email, password}) {
    return mutation({ variables: { input : { email, password } } })
  }
  const errorRegister = error && 'No se puede registrar el usuario. Ya existe o los datos no son correctos.'
  return {register, data, LoginRegister: loading, errorRegister}
}
