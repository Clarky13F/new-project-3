import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation LoginUserMutation($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        email
        createdAt
        updatedAt
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUserMutation($email: String!, $password: String!, $firstName: String, $lastName: String) {
    addUser(email: $email, password: $password, firstName: $firstName, lastName: $lastName) {
      token
      user {
        _id
        firstName
        lastName
        email
        createdAt
        updatedAt
      }
    }
  }
`;

export const CREATE_POST_MUTATION = gql`
  mutation CreatePost($concertName: String!, $message: String!, $image: String!) {
    createPost(concertName: $concertName, message: $message, image: $image) {
      _id
      concertName
      message
      image
      user {
        _id
        email
      }
    }
  }
`;

export const DELETE_POST = gql`
  mutation DeletePost($postId: ID!) {
    deletePost(postId: $postId) {
      _id
    }
  }
`;

export const ADD_COMMENT = gql`
mutation AddComment($postId: ID!, $message: String!) {
  addComment(postId: $postId, message: $message) {
    _id
    message
    user {
      _id
      email
    }
  }
}
`;