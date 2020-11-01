import { gql } from 'apollo-boost'

export const getSinglePhoto = gql`
query getSinglePhoto($id:ID!) {
  photo(id:$id) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}`