import { gql, useMutation } from '@apollo/client'

const SIGNUP = gql`
mutation likePhoto($input: LikePhoto!) {
  likePhoto(input: $input) {
    id,
    liked,
    likes
  }
}
`
export const useToogleLike = () => {
  const [mutation, {data, loading, error}] = useMutation(SIGNUP)
  function handleLikePhoto ({ id }) {
    return mutation({ variables: { input : { id } } })
  }
  const errorLike = error && 'No se puede registrar el usuario. Ya existe o los datos no son correctos.'
  return {handleLikePhoto, data, LoginLikes: loading, errorLike}
}
